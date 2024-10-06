"use client";

import Card from "@/components/Card";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Card>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try Again</button>
    </Card>
  );
}
