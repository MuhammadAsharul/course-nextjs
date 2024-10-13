import { posts } from "../data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const post = posts.find((p) => p.id === parseInt(params.id));
  return NextResponse.json(post);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { text } = await request.json();
  const index = posts.findIndex((post) => post.id === parseInt(params.id));

  posts[index].text = text;
  return NextResponse.json(posts[index]);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const index = posts.findIndex((post) => post.id === parseInt(params.id));

  posts[index] = { id: parseInt(params.id), ...body };
  return NextResponse.json(posts[index]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = posts.findIndex((post) => post.id === parseInt(params.id));
  posts.splice(index, 1);
  return NextResponse.json({
    message: `Delete resource with id ${params.id} success`,
  });
}
