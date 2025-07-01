import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./button"
import Link from "next/link"

export function Login_Form() {
    return (
        <div className="flex flex-col justify-center items-center gap-3 w-8/12 sm:w-4/12">
            <Input type="email" id="email" placeholder="bitcoin@gmail.com" />
            <Input type="password" id="password" placeholder="qweerty1234" />
            <Link href={"/dashboard"} className="w-full">
                <Button className={"w-full cursor-pointer"}>Login</Button>
            </Link>
        </div>
    )
}
