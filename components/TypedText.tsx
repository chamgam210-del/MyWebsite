"use client";

import { useEffect, useState } from "react";

export default function TypedText({
  prefix = "I'm ",
  words,
  className = "",
}: {
  prefix?: string;
  words: string[];
  className?: string;
}) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const delay = deleting ? 50 : 110;
    const pause = !deleting && text === current ? 1500 : 0;

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIdx((i) => i + 1);
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }
    }, pause || delay);

    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words]);

  return (
    <span className={className}>
      {prefix}
      <span className="text-accent">{text}</span>
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-baseline" style={{ height: "0.9em" }} />
    </span>
  );
}
