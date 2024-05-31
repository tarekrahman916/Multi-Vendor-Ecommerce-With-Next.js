import { Layers } from "lucide-react";

export default function LargeCard({ data }: { data: any }) {
  return (
    <div
      className={`rounded-lg ${data.color} text-white shadow-md p-8 flex flex-col items-center gap-2`}
    >
      {/* <Layers /> */}
      {data.icon}
      <h4>{data.period}</h4>
      <h2 className="lg:text-3xl text-2xl">BDT.{data.sales}</h2>
    </div>
  );
}
