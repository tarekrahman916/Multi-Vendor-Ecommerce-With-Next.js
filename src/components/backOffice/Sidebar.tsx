import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="dark:bg-slate-700 bg-white space-y-6 w-60  min-h-screen fixed top-0 left-0 text-slate-800 dark:text-slate-50 p-3 shadow-md">
      <Link href="/" className="text-2xl font-bold">
        Efy Mart
      </Link>
      <div className="space-y-3 flex flex-col mt-20">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/">Catalogue</Link>
        <Link href="/">Orders</Link>
        <Link href="/">Customers</Link>
        <Link href="/">Markets</Link>
        <Link href="/">Suppliers</Link>
        <Link href="/">Staff</Link>
        <Link href="/">Settings</Link>
        <Link href="/">Online Store</Link>
        <Link href="/">Staff</Link>
      </div>
    </div>
  );
}
