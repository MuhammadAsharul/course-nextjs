import Link from "next/link";
import { cache } from "react";

async function fetchUsers() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });
    return data.json();
  } catch (error) {
    console.error(error);
  }
}
export default async function Users() {
  const users = await fetchUsers();
  //   console.log(users);

  return (
    <div className="grid grid-cols-5 gap-[20px] m-12">
      {users.map((user: any) => {
        return (
          <div key={user.id} className="h-[150px] border-black border-4 p-4">
            <div className="">name : {user.name}</div>
            <div className="">email : {user.email}</div>
            <Link href={`/users/${user.id}`}>Go to User Detail</Link>
          </div>
        );
      })}
    </div>
  );
}
