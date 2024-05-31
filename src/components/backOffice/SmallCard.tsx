export default function SmallCard({ data }: { data: any }) {
  const { title, number, iconBg, icon: Icon } = data;
  return (
    <div className="rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4 dark:text-slate-50 text-slate-800">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full  flex items-center justify-center`}
        >
          <Icon className="text-slate-50 dark:text-slate-50" />
        </div>

        <div className="flex flex-col gap-1">
          <p>{title}</p>
          <h3 className="text-2xl font-semibold">{number}</h3>
        </div>
      </div>
    </div>
  );
}
