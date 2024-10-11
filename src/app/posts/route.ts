import { posts } from "./data";
export async function GET() {
  //   return new Response("Hello from Route Post");
  return Response.json(posts);
}
export async function POST(request: Request) {
  const post = await request.json();
  const newPost = {
    id: posts.length + 1,
    ...post,
  };
  posts.push(newPost);
  return Response.json(newPost, {
    status: 201,
  });

  //   console.log(post);
  //   return new Response("post request");
}
