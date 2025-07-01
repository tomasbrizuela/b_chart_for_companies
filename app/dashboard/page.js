import { ChartPieDonutText } from "../../components/ui/pie_chart";

export default function Home() {
    return (
        <div className="flex flex-col justify-start items-center h-screen gap-4 p-0">
            <div className="flex flex-col justify-end items-end w-12/12 px-4">
                <div className="flex flex-col justify-center items-center border-2 border-black rounded-2xl px-3 py-1">
                    <p className="font-bold text-center"> 1₿ = $107.569</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-full gap-4">
                <h1 className="text-4xl font-bold text-center">Always ₿uy the top</h1>
                <ChartPieDonutText></ChartPieDonutText>
            </div>
        </div>
    );
}