import { notFound } from "next/navigation";
export default function Note({ params }: { params: { noteId: string } }) {
  if (parseInt(params.noteId) > 100) {
    notFound();
  }
  return <h1>Note Detail {params.noteId}</h1>;
}
