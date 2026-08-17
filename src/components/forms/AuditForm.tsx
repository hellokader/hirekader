"use client";

import { FormEvent, useState } from "react";

export function AuditForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/audit", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });
    setStatus(response.ok ? "success" : "error");
  }

  return (
    <form className="audit-form" onSubmit={onSubmit}>
      <div className="fr">
        <label htmlFor="f-name">Your name</label>
        <input id="f-name" name="name" type="text" placeholder="Sarah Khan" required />
      </div>
      <div className="fr">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" placeholder="you@business.com" required />
      </div>
      <div className="fr">
        <label htmlFor="f-biz">Business / website</label>
        <input id="f-biz" name="business" type="text" placeholder="business.com" required />
      </div>
      <div className="fr fr-2">
        <div>
          <label htmlFor="f-area">Service area</label>
          <input id="f-area" name="serviceArea" type="text" placeholder="City or radius" required />
        </div>
        <div>
          <label htmlFor="f-phone">Phone / WhatsApp</label>
          <input id="f-phone" name="phone" type="tel" placeholder="+1 555 000 000" />
        </div>
      </div>
      <div className="fr fr-2">
        <div>
          <label htmlFor="f-budget">Monthly ad budget</label>
          <select id="f-budget" name="budget">
            <option>Not running ads yet</option>
            <option>Under $1k</option>
            <option>$1k - $3k</option>
            <option>$3k - $10k</option>
            <option>$10k+</option>
          </select>
        </div>
        <div>
          <label htmlFor="f-trade">Trade</label>
          <select id="f-trade" name="trade">
            <option>Plumbing</option>
            <option>HVAC</option>
            <option>Roofing</option>
            <option>Electrical</option>
            <option>Pest control</option>
            <option>Cleaning</option>
            <option>Landscaping</option>
            <option>Garage doors</option>
            <option>Restoration</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="fr">
        <label htmlFor="f-msg">What&apos;s going on?</label>
        <textarea id="f-msg" name="message" placeholder="Phone not ringing, wasted spend, new location..." />
      </div>
      <button className="btn btn-accent btn-block" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Get my free audit ->"}
      </button>
      <p className="form-note" role="status">
        {status === "success"
          ? "Thanks. Your audit request was received."
          : status === "error"
            ? "The form could not be sent. Please try again."
            : ""}
      </p>
    </form>
  );
}
