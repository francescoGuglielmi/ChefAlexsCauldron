"use client";

import { FormEvent } from "react";
import Divider from '@/components/Divider/Divider';
import styles from './ContactPage.module.scss';

// TODO: replace with the real bookings address.
const CONTACT_EMAIL = "bookings@example.com";

export default function ContactPage() {
  // Static export has no server, so the form opens the visitor's
  // email app with the enquiry pre-filled instead of posting anywhere.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Private dining enquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Date: ${data.get("date") || "Not set"}`,
      `Guests: ${data.get("guests") || "Not set"}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>
        <span className={styles.titleHighlight}>S</span>end a Raven
      </h2>

      <p className={styles.intro}>
        Planning a feast? Tell us a little about your event and we&apos;ll get
        back to you. You can also email us directly at{" "}
        <a className={styles.emailLink} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <Divider />

      <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
        <label className={styles.field}>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>

        <label className={styles.field}>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>

        <div className={styles.row}>
          <label className={styles.field}>
            Event date
            <input name="date" type="date" />
          </label>

          <label className={styles.field}>
            Guests
            <input name="guests" type="number" min={1} inputMode="numeric" />
          </label>
        </div>

        <label className={styles.field}>
          Message
          <textarea name="message" rows={5} required />
        </label>

        <button className={styles.submit} type="submit">Send enquiry</button>
      </form>
    </section>
  );
}
