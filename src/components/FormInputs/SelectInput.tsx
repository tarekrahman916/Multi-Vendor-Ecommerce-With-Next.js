interface Option {
  id: string | number;
  title: string;
}

interface ISelect {
  label: string;
  name: string;
  register: any;

  className?: any;
  options?: Option[];
  multiple?: boolean;
  hasMultipleSelect?: boolean;
}

export default function SelectInput({
  label,
  name,
  register,
  className = "sm:col-span-2",
  options = [],
  multiple = false,
}: ISelect) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          {...register(`${name}`)}
          id={name}
          multiple={multiple}
          name={name}
          className="block w-full rounded-md border-none outline-none py-3 px-3 text-gray-900 dark:text-slate-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-700 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-slate-50"
        >
          {options.map((option, i) => {
            return (
              <option className="text-gray-900" key={i} value={option.id}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
