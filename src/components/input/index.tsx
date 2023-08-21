import { component$ } from "@builder.io/qwik";
import clsx from "clsx";

interface IInput {
  type?: "text" | "password" | "email";
  name: string;
  styles?: string;
  placeholder?: string;
  value?: string;
}

const Input = component$<IInput>(
  ({ type = "text", name, styles, placeholder = "", value }) => {
    return (
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        class={clsx(
          "inline-block w-full rounded-lg border border-neutral-200 border-b-neutral-300 px-3 py-2 text-sm text-neutral-700 shadow shadow-black/[0.05] outline-none outline outline-2 -outline-offset-2 outline-transparent placeholder:text-neutral-500 focus:text-neutral-900 focus:outline-violet-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:focus:text-neutral-100",
          styles,
        )}
      />
    );
  },
);

export default Input;
