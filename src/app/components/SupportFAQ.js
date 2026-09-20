"use client";

import { useId, useState } from "react";

const groups = [
  "All topics",
  "Account access",
  "Privacy & safety",
  "Using Ments",
];
export default function SupportFAQ({ faqs }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All topics");
  const id = useId();
  const category = (index) =>
    index < 3
      ? "Account access"
      : index < 9
        ? "Privacy & safety"
        : "Using Ments";
  const filtered = faqs.filter(
    (item, index) =>
      (group === "All topics" || category(index) === group) &&
      `${item.q} ${item.a}`.toLowerCase().includes(query.toLowerCase().trim()),
  );
  return (
    <div className="support-search-area">
      <label htmlFor={id}>Find an answer</label>
      <div className="search-field">
        <span aria-hidden="true">⌕</span>
        <input
          id={id}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “password”, “profile”, or “account deletion”"
        />
      </div>
      <div
        className="faq-filters"
        role="group"
        aria-label="Filter questions by topic"
      >
        {groups.map((topic) => (
          <button
            key={topic}
            aria-pressed={group === topic}
            onClick={() => setGroup(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      <p className="search-results" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "answer" : "answers"}
      </p>
      <div className="faq-list">
        {filtered.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-search">
          <h3>No matching answers yet.</h3>
          <p>
            Try a different search or email{" "}
            <a href="mailto:support@ments.app">support@ments.app</a>.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setGroup("All topics");
              setQuery("");
            }}
          >
            Show all questions
          </button>
        </div>
      )}
    </div>
  );
}
