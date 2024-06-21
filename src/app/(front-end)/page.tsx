import CategoryList from "@/components/frontEnd/CategoryList";
import CommunityTrainings from "@/components/frontEnd/CommunityTrainings";
import Hero from "@/components/frontEnd/Hero";
import MarketList from "@/components/frontEnd/MarketList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      <div className="py-8">
        <CategoryList />
      </div>
      <div className="py-8">
        <CategoryList />
      </div>
      <div className="py-8">
        <CategoryList />
      </div>
      <CommunityTrainings />

      <Link className="my-4 underline" href="/register-supplier">
        Become a Supplier / Vendor
      </Link>
    </div>
  );
}
