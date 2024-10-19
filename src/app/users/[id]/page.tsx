import Link from "next/link";

async function fetchUser(id: string) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        cache: "no-store",
      }
    );
    return data.json();
  } catch (error) {}
}

export default async function UserDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const user = await fetchUser(params.id);
  return (
    <div className="h-[150px] border-black border-4 p-4">
      <div className="">name : {user.name}</div>
      <div className="">email : {user.email}</div>
      <div className="">company : {user.company?.name}</div>
      <Link href={`/users`}>Go Back to Users</Link>
    </div>
  );
}
