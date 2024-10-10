import { post } from "./data";
export async function GET() {
  //   return new Response("Hello from Route Post");
  return Response.json(post);
}
