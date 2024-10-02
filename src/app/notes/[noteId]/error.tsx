"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h1>{error.message}</h1>
      <button onClick={reset} className="bg-slate-800 hover:opacity:50">
        try again
      </button>
    </div>
  );
}
