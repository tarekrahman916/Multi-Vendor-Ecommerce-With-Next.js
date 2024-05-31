import { Layers } from "lucide-react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const ordersStat = [
    {
      period: "Total Orders",
      sales: 110000,
      color: "bg-green-600",
      icon: <Layers />,
    },

    {
      period: "Yesterday Orders",
      sales: 130000,
      color: "bg-blue-600",
      icon: <Layers />,
    },
    {
      period: "This Month",
      sales: 3000000,
      color: "bg-orange-600",
      icon: <Layers />,
    },
    {
      period: "All Time Sales",
      sales: 5000000,
      color: "bg-purple-600",
      icon: <Layers />,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {ordersStat.map((item, i) => {
        return <LargeCard data={item} key={i} />;
      })}
    </div>
  );
}
