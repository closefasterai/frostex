"use client";

import { useState, type FormEvent } from "react";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { track } from "@/lib/analytics";
import { business, telHref } from "@/lib/business";
import { services, ui, type Locale } from "@/lib/content";
import { TrackedAnchor } from "@/components/TrackedLink";

type Fields = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const empty: Fields = { name: "", phone: "", service: "", message: "" };

export function QuoteForm({ locale }: { locale: Locale }) {
  const copy = ui[locale];
  const [fields, setFields] = useState<Fields>(empty);
  const [token, setToken] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [done, setDone] = useState<Fields | null>(null);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: string[] = [];
    if (fields.name.trim().length < 2) nextErrors.push(copy.errName);
    const digits = fields.phone.replace(/\D/g, "");
    if (digits.length < 10) nextErrors.push(copy.errPhone);
    if (!services.some((service) => service.slug === fields.service)) {
      nextErrors.push(copy.errService);
    }
    if (fields.message.trim().length < 8) nextErrors.push(copy.errMessage);
    if (!token) nextErrors.push(copy.errCheck);
    setErrors(nextErrors);
    if (nextErrors.length > 0) return;

    const service = services.find((item) => item.slug === fields.service);
    track("quote_submit", {
      service: fields.service,
      locale,
    });
    setDone({
      ...fields,
      service: service ? service.nav[locale] : fields.service,
    });
  }

  if (done) {
    return (
      <div data-testid="quote-success" className="bg-white p-6">
        <p className="font-display text-2xl font-bold text-navy">{copy.successTitle}</p>
        <p className="mt-3 text-lg">{copy.successBody}</p>
        <dl className="mt-6 space-y-2 text-base">
          <div>
            <dt className="font-bold text-navy">{copy.name}</dt>
            <dd>{done.name}</dd>
          </div>
          <div>
            <dt className="font-bold text-navy">{copy.phone}</dt>
            <dd>{done.phone}</dd>
          </div>
          <div>
            <dt className="font-bold text-navy">{copy.service}</dt>
            <dd>{done.service}</dd>
          </div>
          <div>
            <dt className="font-bold text-navy">{copy.message}</dt>
            <dd>{done.message}</dd>
          </div>
        </dl>
        <TrackedAnchor
          href={telHref}
          event="call_click"
          eventProps={{ location: "quote-success" }}
          className="mt-6 inline-flex min-h-12 items-center justify-center bg-yellow px-5 py-3 font-display font-bold text-navy"
        >
          {copy.callNow}
        </TrackedAnchor>
      </div>
    );
  }

  return (
    <form data-testid="quote-form" onSubmit={onSubmit} noValidate className="bg-white p-6">
      <h2 className="font-display text-2xl font-bold text-navy">{copy.formTitle}</h2>
      <p className="mt-2">{copy.formBody}</p>
      <p className="mt-2 text-sm font-bold text-red">{copy.formDemo}</p>
      {errors.length > 0 ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-red">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ) : null}
      <div className="mt-5 grid gap-4">
        <label className="grid gap-1 font-bold text-navy">
          {copy.name}
          <input
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            className="border border-navy/20 px-3 py-3 font-normal text-ink"
            required
          />
        </label>
        <label className="grid gap-1 font-bold text-navy">
          {copy.phone}
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="border border-navy/20 px-3 py-3 font-normal text-ink"
            required
          />
        </label>
        <label className="grid gap-1 font-bold text-navy">
          {copy.service}
          <select
            name="service"
            value={fields.service}
            onChange={(event) => update("service", event.target.value)}
            className="border border-navy/20 bg-white px-3 py-3 font-normal text-ink"
            required
          >
            <option value="">{copy.choose}</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.nav[locale]}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 font-bold text-navy">
          {copy.message}
          <textarea
            name="message"
            rows={4}
            placeholder={copy.messageHint}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            className="border border-navy/20 px-3 py-3 font-normal text-ink"
            required
          />
        </label>
        <TurnstileWidget onToken={setToken} />
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center bg-yellow px-5 py-3 font-display text-base font-bold text-navy hover:brightness-95"
        >
          {copy.submit}
        </button>
        <p className="text-sm">
          {copy.offer} {business.phoneDisplay}
        </p>
      </div>
    </form>
  );
}
