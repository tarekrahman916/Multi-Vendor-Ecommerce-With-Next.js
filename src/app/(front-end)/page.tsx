import Hero from "@/components/frontEnd/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <Link className="my-4 underline" href="/register-supplier">
        Become a Supplier / Vendor
      </Link>
    </div>
  );
}
