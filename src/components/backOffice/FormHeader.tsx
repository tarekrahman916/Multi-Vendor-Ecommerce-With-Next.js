"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FormHeader({ title }: { title: string }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-4 px-12 bg-white text-slate-800 dark:bg-slate-700 dark:text-slate-50 rounded-lg shadow mb-12">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button onClick={() => router.back()} className="">
        <X />
      </button>
    </div>
  );
}
