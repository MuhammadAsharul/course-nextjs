"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  console.log(pathName);
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul className="flex gap-4 text-sm text-blue-300">
        <Link
          className={pathName === "/products/food" ? "text-red-200" : ""}
          href="/products/food"
          scroll={false}
        >
          Foods
        </Link>
        <Link
          className={pathName === "/products/sports" ? "text-red-200" : ""}
          href="/products/sports"
        >
          Sports
        </Link>
        <Link
          className={pathName === "/products/technology" ? "text-red-200" : ""}
          href="/products/technology"
        >
          Technology
        </Link>
      </ul>
      {children}
    </>
  );
}
