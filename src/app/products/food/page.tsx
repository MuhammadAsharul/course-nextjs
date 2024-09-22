"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams.get("q"));
  return (
    <div className="h-[1000px]">
      <h1 className="">Food Page</h1>
      <button
        onClick={() => {
          router.push("/products");
        }}
        className="border-4 border-slate-700 text-green-400"
      >
        Go Back to Product
      </button>
    </div>
  );
}
