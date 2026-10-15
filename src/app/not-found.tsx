import Link from "next/link";
import { SiteFrame } from "@/components/SiteFrame";
import { ui } from "@/lib/content";

export default function NotFound() {
  return (
    <SiteFrame locale="en">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-display text-4xl font-bold text-navy">{ui.en.notFoundTitle}</h1>
        <p className="mt-4 text-lg">{ui.en.notFoundBody}</p>
        <Link href="/" className="mt-6 inline-block font-display font-bold text-navy underline">
          {ui.en.backHome}
        </Link>
      </div>
    </SiteFrame>
  );
}
