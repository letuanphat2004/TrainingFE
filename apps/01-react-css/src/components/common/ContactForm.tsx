import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setStatus("Thank you. Our team will contact you shortly.");
  }

  return (
    <form className="contact-form" data-contact-form onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          <span>First name</span>
          <input name="firstName" placeholder="First name" required />
        </label>
        <label>
          <span>Last name</span>
          <input name="lastName" placeholder="Last name" required />
        </label>
      </div>
      <label>
        <span>Email address</span>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
      </label>
      <label>
        <span>Subject message</span>
        <input name="subject" placeholder="Subject message" />
      </label>
      <label>
        <span>Your inquiry here</span>
        <textarea
          name="message"
          placeholder="Your inquiry here"
          required
        />
      </label>
      <button className="button" type="submit">
        Send Message
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
