import { Button } from "@/components/ui/button";
import { Login_Form } from "@/components/ui/login_form";
import { Separator } from "@/components/ui/separator";

export default function Start() {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4 w-full">
            <h1 className="font-bold text-4xl">Start staking</h1>
            <Login_Form></Login_Form>
            <div className="text-center">
                <Separator className="w-[200px] bg-gray-400"></Separator>
            </div>
            <div className="text-center w-full">
                <Button className={" w-full max-w-sm bg-blue-500"}>Start with Google</Button>
            </div>
        </div>
    );
}