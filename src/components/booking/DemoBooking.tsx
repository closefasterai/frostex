"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { bookableServices, ui } from "@/lib/content";
import { formatWeekday, TIME_SLOTS, upcomingWeekdays } from "@/components/booking/schedule";
import type { BookingFlowProps } from "@/components/booking/types";

const choice =
  "border border-navy/20 px-3 py-3 text-left font-display font-bold text-navy hover:border-navy";
const choiceOn = "border-2 border-navy bg-yellow px-3 py-3 text-left font-display font-bold text-navy";

export function DemoBooking({ locale, onStart, onComplete }: BookingFlowProps) {
  const copy = ui[locale];
  const params = useSearchParams();
  const requested = params.get("service");
  const requestedService =
    requested && bookableServices.some((service) => service.slug === requested)
      ? requested
      : "";
  const [step, setStep] = useState(1);
  const [pickedService, setPickedService] = useState<string | null>(null);
  const serviceId = pickedService ?? requestedService;
  const dates = upcomingWeekdays(10);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const service = bookableServices.find((item) => item.slug === serviceId);
  const slot = TIME_SLOTS.find((item) => item.id === time);

  function titles() {
    if (step === 1) return copy.stepServiceTitle;
    if (step === 2) return copy.stepTimeTitle;
    if (step === 3) return copy.stepContactTitle;
    return copy.stepDoneTitle;
  }

  function goNext() {
    if (step === 1) {
      if (!serviceId) {
        setError(copy.errService);
        return;
      }
      setError("");
      onStart(serviceId);
      setStep(2);
      return;
    }
    if (step === 2) {
      if (!date || !time) {
        setError(locale === "es" ? "Elija día y hora." : "Pick a day and a time.");
        return;
      }
      setError("");
      setStep(3);
      return;
    }
    if (step === 3) {
      if (name.trim().length < 2) {
        setError(copy.errName);
        return;
      }
      if (phone.replace(/\D/g, "").length < 10) {
        setError(copy.errPhone);
        return;
      }
      setError("");
      const draft = {
        serviceId,
        date,
        time,
        name: name.trim(),
        phone: phone.trim(),
        note: note.trim(),
      };
      onComplete(draft);
      setStep(4);
    }
  }

  return (
    <div data-testid="booking" className="mx-auto max-w-2xl px-4 py-12">
      <p className="flex items-center gap-2 text-sm">
        <span data-testid="demo-badge" className="bg-yellow px-2 py-0.5 font-display text-xs font-bold text-navy">
          {copy.demoBadge}
        </span>
        <span>{copy.demoBooking}</span>
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">{titles()}</h1>
      <p className="mt-2 text-ink">{copy.bookIntro}</p>
      <ol className="mt-6 flex gap-3 text-sm" data-testid={`book-step-${step}`}>
        {[copy.stepService, copy.stepTime, copy.stepContact, copy.stepDone].map((label, index) => (
          <li
            key={label}
            className={index + 1 === step ? "font-bold text-navy" : "text-ink/70"}
          >
            <span className="mr-1 inline-flex h-6 w-6 items-center justify-center bg-navy text-xs text-white">
              {index + 1}
            </span>
            <span className="hidden sm:inline">{label}</span>
          </li>
        ))}
      </ol>

      {error ? <p className="mt-4 font-bold text-red">{error}</p> : null}

      {step === 1 ? (
        <div className="mt-6 grid gap-3">
          {bookableServices.map((item) => (
            <button
              key={item.slug}
              type="button"
              aria-pressed={serviceId === item.slug}
              className={serviceId === item.slug ? choiceOn : choice}
              onClick={() => setPickedService(item.slug)}
            >
              {item.nav[locale]}
            </button>
          ))}
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-6">
          <p className="text-sm">{copy.timeNote}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {dates.map((iso) => (
              <button
                key={iso}
                type="button"
                aria-pressed={date === iso}
                className={date === iso ? choiceOn : choice}
                onClick={() => setDate(iso)}
              >
                {formatWeekday(iso, locale)}
              </button>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {TIME_SLOTS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={time === item.id}
                className={time === item.id ? choiceOn : choice}
                onClick={() => setTime(item.id)}
              >
                {item[locale]}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-6 grid gap-4">
          <label className="grid gap-1 font-bold text-navy">
            {copy.name}
            <input
              value={name}
              autoComplete="name"
              onChange={(event) => setName(event.target.value)}
              className="border border-navy/20 px-3 py-3 font-normal text-ink"
            />
          </label>
          <label className="grid gap-1 font-bold text-navy">
            {copy.phone}
            <input
              value={phone}
              type="tel"
              autoComplete="tel"
              onChange={(event) => setPhone(event.target.value)}
              className="border border-navy/20 px-3 py-3 font-normal text-ink"
            />
          </label>
          <label className="grid gap-1 font-bold text-navy">
            {copy.note}
            <textarea
              value={note}
              rows={3}
              placeholder={copy.noteHint}
              onChange={(event) => setNote(event.target.value)}
              className="border border-navy/20 px-3 py-3 font-normal text-ink"
            />
          </label>
        </div>
      ) : null}

      {step === 4 ? (
        <div data-testid="book-confirmation" className="mt-6 bg-white p-5">
          <p className="text-lg">{copy.confirmBody}</p>
          <dl className="mt-4 space-y-2">
            <div>
              <dt className="font-bold text-navy">{copy.service}</dt>
              <dd>{service?.nav[locale]}</dd>
            </div>
            <div>
              <dt className="font-bold text-navy">{copy.stepTime}</dt>
              <dd>
                {formatWeekday(date, locale)} {slot ? slot[locale] : time}
              </dd>
            </div>
            <div>
              <dt className="font-bold text-navy">{copy.name}</dt>
              <dd>{name}</dd>
            </div>
            <div>
              <dt className="font-bold text-navy">{copy.phone}</dt>
              <dd>{phone}</dd>
            </div>
            {note ? (
              <div>
                <dt className="font-bold text-navy">{copy.note}</dt>
                <dd>{note}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      ) : null}

      {step < 4 ? (
        <div className="mt-6 flex gap-3">
          {step > 1 ? (
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center border-2 border-navy px-5 font-display font-bold text-navy"
              onClick={() => {
                setError("");
                setStep((value) => value - 1);
              }}
            >
              {copy.back}
            </button>
          ) : null}
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center bg-yellow px-5 font-display font-bold text-navy"
            onClick={goNext}
          >
            {copy.continue}
          </button>
        </div>
      ) : null}
    </div>
  );
}
