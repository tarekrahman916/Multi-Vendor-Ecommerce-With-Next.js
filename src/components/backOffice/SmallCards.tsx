import { ShoppingCart, CheckCheck, RefreshCcw, Loader2 } from "lucide-react";

import SmallCard from "./SmallCard";

export default function SmallCards() {
  const ordersStatus = [
    {
      title: "Total Orders",
      number: 552,
      iconBg: "bg-orange-600",
      icon: ShoppingCart,
    },

    {
      title: "Orders Pending",
      number: 110,
      iconBg: "bg-green-600",
      icon: Loader2,
    },
    {
      title: "Orders Processing",
      number: 187,
      iconBg: "bg-blue-600",
      icon: RefreshCcw,
    },
    {
      title: "Orders Delivered",
      number: 200,
      iconBg: "bg-purple-600",
      icon: CheckCheck,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {ordersStatus.map((status, i) => {
        return <SmallCard data={status} key={i} />;
      })}
    </div>
  );
}
