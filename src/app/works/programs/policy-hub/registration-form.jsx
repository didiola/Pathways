"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { FPDI_EMAIL, REGISTRATION_FORM_URL } from "./hub-content";

const levels = ["100 Level", "200 Level", "300 Level", "400 Level", "500 Level", "600 Level", "Postgraduate", "Staff / Faculty"];

const inputClass =
  "w-full rounded-lg border border-[#e5e5e5] bg-white px-4 py-3 text-base outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/15";

// The site has no form backend, so the form composes an email to the hub
// (or to FPDI when the hub has no address yet) in the visitor's mail app.
export default function RegistrationForm({ hub }) {
  if (REGISTRATION_FORM_URL) return <ExternalRegistration hub={hub} />;
  return <EmailRegistration hub={hub} />;
}

function ExternalRegistration({ hub }) {
  return (
    <div className="mx-auto max-w-xl py-6 text-center md:py-10">
      <h2 className="text-2xl font-bold md:text-4xl">Join the Hub</h2>
      <p className="mt-3 text-gray-600">
        Become a member of {hub.hubName} and work with fellow students on
        localized policy development, leadership training and campus events.
      </p>
      <a
        href={REGISTRATION_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-white bg-gradient-to-r from-green-600 to-green-500 px-6 py-3 text-white transition hover:opacity-90"
      >
        Open the registration form
        <ArrowUpRight size={18} />
      </a>
    </div>
  );
}

function EmailRegistration({ hub }) {
  const recipient = hub.email || FPDI_EMAIL;
  const [submitted, setSubmitted] = useState(null);
  const [copied, setCopied] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const body = [
      `I would like to join ${hub.hubName} at ${hub.institution}.`,
      "",
      `Full name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Course / department: ${data.course}`,
      `Level: ${data.level}`,
      "",
      "Why I want to join:",
      data.motivation,
    ].join("\n");
    const subject = `Policy Hub registration – ${hub.code}`;

    setSubmitted({ subject, body });
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (submitted) {
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(`${submitted.subject}\n\n${submitted.body}`);
        setCopied(true);
      } catch {
        setCopied(false);
      }
    };

    return (
      <div className="mx-auto max-w-xl py-6 text-center md:py-10">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white">
          <Check size={26} />
        </span>
        <h2 className="text-2xl font-bold md:text-3xl">Almost there — send the email</h2>
        <p className="mt-3 text-gray-600">
          Your email app should have opened with your registration addressed to{" "}
          <span className="font-semibold text-green-700">{recipient}</span>. Press
          send to finish joining {hub.hubName}.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Nothing opened? Copy your details and email them to {recipient}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border border-green-600 px-5 py-2.5 text-sm text-green-700 transition hover:bg-green-50"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy my details"}
          </button>
          <button
            type="button"
            onClick={() => {
              setSubmitted(null);
              setCopied(false);
            }}
            className="rounded-full px-5 py-2.5 text-sm text-gray-500 transition hover:text-black"
          >
            Edit registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
      <div>
        <h2 className="text-2xl font-bold md:text-4xl">Join the Hub</h2>
        <p className="mt-3 text-gray-600">
          Become a member of {hub.hubName} and work with fellow students on
          localized policy development, leadership training and campus events.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Your registration is sent by email to{" "}
          <span className="font-medium text-green-700">{recipient}</span>.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" className="sm:col-span-2">
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Email address" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </Field>
        <Field label="Phone number" htmlFor="phone" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
        <Field label="Course / department" htmlFor="course">
          <input id="course" name="course" required className={inputClass} />
        </Field>
        <Field label="Level" htmlFor="level">
          <select id="level" name="level" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select your level
            </option>
            {levels.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </Field>
        <Field label="Why do you want to join?" htmlFor="motivation" className="sm:col-span-2">
          <textarea id="motivation" name="motivation" required rows={4} className={`${inputClass} resize-y`} />
        </Field>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-white bg-gradient-to-r from-green-600 to-green-500 px-6 py-3 text-white transition hover:opacity-90"
          >
            Register
            <ArrowUpRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, htmlFor, optional = false, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-[#231F20]">
        {label}
        {optional && <span className="ml-1 font-normal text-gray-400">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
