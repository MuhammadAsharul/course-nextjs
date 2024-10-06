import Card from "@/components/Card";

function getRandomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Analytics() {
  const item = getRandomItem(["", "ikan"]);
  if (item === "") {
    throw new Error("Item is Empty");
  }
  return <Card>Analytics Slot</Card>;
}
