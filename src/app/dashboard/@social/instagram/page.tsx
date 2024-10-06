import Card from "@/components/Card";
import Link from "next/link";

export default function Instagram() {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <h3>Instagram</h3>
        <Link href={"/dashboard"}>Go back to social</Link>
      </div>
    </Card>
  );
}
