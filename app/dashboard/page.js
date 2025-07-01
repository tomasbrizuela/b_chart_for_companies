import { ChartPieDonutText } from "../../components/ui/pie_chart";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <h1 className="text-4xl font-bold text-center">Always ₿uy the top</h1>
            <ChartPieDonutText></ChartPieDonutText>
        </div>
    );
}