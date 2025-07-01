import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { SeparatorDemo } from "@/components/ui/separator_demo";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="font-bold text-4xl">Your ₿ay to freedom</h1>
      <p>Hard money</p>
      <Link href={"/start"}>
        <Button>Start stacking now</Button>
      </Link>
    </div>
  );
}
