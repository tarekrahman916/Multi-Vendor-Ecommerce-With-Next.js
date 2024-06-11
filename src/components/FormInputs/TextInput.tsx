import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface ITextInput {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  isRequired?: boolean;
  type?: string;
  className?: string;
  defaultValue?: string;
}

export default function TextInput({
  label,
  name,
  register,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}: ITextInput) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: isRequired })}
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          autoComplete={name}
          className="block w-full rounded-md border-none outline-none py-3 px-3 text-gray-900 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-700 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
        {errors[`${name}`] && (
          <span className="text-sm text-red-600 ">{label} is required</span>
        )}
      </div>
    </div>
  );
}
