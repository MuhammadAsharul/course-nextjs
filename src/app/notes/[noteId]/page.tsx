export default function Note({ params }: { params: { noteId: string } }) {
  return <h1>Note Detail {params.noteId}</h1>;
}
