import { Button } from "@/components/ui/button";
import { Login_Form } from "@/components/ui/login_form";
import { Separator } from "@/components/ui/separator";

export default function Start() {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4 w-full">
            <h1 className="font-bold text-4xl">Start staking</h1>
            <Login_Form></Login_Form>
            <div className="text-center">
                <Separator className="w-auto bg-gray-400"></Separator>
            </div>
            <div className="text-center w-8/12 sm:w-4/12">
                <Button className={"w-full bg-blue-500"}>Start with Google</Button>
            </div>
        </div>
    );
}