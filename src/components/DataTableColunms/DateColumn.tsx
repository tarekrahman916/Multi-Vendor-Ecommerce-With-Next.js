import React from "react";

export default function DateColumn({
  row,
  accessorKey,
}: {
  row: any;
  accessorKey: any;
}) {
  const createdAt = row.getValue(`${accessorKey}`);
  const originalDate = new Date(createdAt);

  const day = originalDate.getDate();
  const month = originalDate.toLocaleDateString("default", {
    month: "short",
  });
  const year = originalDate.getFullYear();
  const formatted = `${day}th ${month} ${year}`;

  return <div className="text-slate-900 dark:text-slate-100">{formatted}</div>;
}
