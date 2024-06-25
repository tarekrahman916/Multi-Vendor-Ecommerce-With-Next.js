// @ts-nocheck
import CategoryList from "@/components/frontEnd/CategoryList";
import CommunityTrainings from "@/components/frontEnd/CommunityTrainings";
import Hero from "@/components/frontEnd/Hero";
import MarketList from "@/components/frontEnd/MarketList";
import { getData } from "@/lib/getData";
import Link from "next/link";

export default async function Home() {
  const categories = await getData("categories");
  return (
    <div className="min-h-screen">
      <Hero />
      <MarketList />
      {categories.map((category) => {
        return (
          <div key={category.slug} className="py-8">
            <CategoryList category={category} />
          </div>
        );
      })}

      <CommunityTrainings />

      <Link className="my-4 underline" href="/register-supplier">
        Become a Supplier / Vendor
      </Link>
    </div>
  );
}
