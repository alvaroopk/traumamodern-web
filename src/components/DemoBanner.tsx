"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ORIGINAL_URL } from "@/lib/constants";

const noop = () => () => {};
function useDismissed(): boolean {
  return useSyncExternalStore(
    noop,
    () => localStorage.getItem("demo_banner_dismissed") === "1",
    () => false,
  );
}

export default function DemoBanner() {
  const dismissedFromStorage = useDismissed();
  const [dismissedLocally, setDismissedLocally] = useState(false);

  const visible = !dismissedFromStorage && !dismissedLocally;

  const handleDismiss = () => {
    localStorage.setItem("demo_banner_dismissed", "1");
    setDismissedLocally(true);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-400 text-black px-4 py-3 flex items-center justify-between gap-4 shadow-lg">
      <p className="text-sm font-medium">
        Esta web es solo una <strong>DEMO</strong> construida por WebRebuild
        para{" "}
        <Link
          href={ORIGINAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:opacity-75 transition-opacity"
        >
          {ORIGINAL_URL}
        </Link>
      </p>
      <button
        onClick={handleDismiss}
        className="shrink-0 bg-black text-white text-sm font-semibold px-4 py-1.5 rounded hover:bg-gray-800 transition-colors"
      >
        Entendido
      </button>
    </div>
  );
}
