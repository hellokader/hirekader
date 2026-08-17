"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({ invert = false }: { invert?: boolean }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: formData.get("email") }),
      headers: { "Content-Type": "application/json" }
    });
    setStatus(response.ok ? "success" : "error");
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="email" type="email" placeholder="you@business.com" aria-label="Email" required />
      <button className={`btn btn-${invert ? "invert" : "accent"}`} type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      <span className="form-status" role="status">
        {status === "success" ? "You're on the list." : status === "error" ? "Something went wrong." : ""}
      </span>
    </form>
  );
}
