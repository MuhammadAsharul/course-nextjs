import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  //   const headerList = new Headers(request.headers);
  const headerList = headers();
  console.log(headerList.get("Authorization"));
  return new Response("<h1>Profile data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
