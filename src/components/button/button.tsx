import { HTMLAttributes, Slot, component$ } from "@builder.io/qwik";
import clsx from "clsx";

interface IButton {
  appr?: "primary" | "inverted" | "ghost";
  styles?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const Button = component$<HTMLAttributes<HTMLButtonElement> & IButton>(
  (props) => {
    const { appr, isDisabled = false, isLoading = false, styles } = props;

    const baseStyles =
      "select-none inline-flex font-medium px-4 py-2.5 rounded-lg outline-none outline-2 outline outline-offset-2 outline-transparent border transition text-sm disabled:opacity-60 disabled:pointer-events-none dark:disabled:opacity-40";

    const defaultStyles =
      "border-b-neutral-300 dark:hover:text-neutral-100 dark:focus:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900 dark:text-neutral-300 hover:bg-neutral-50 hover:border-neutral-300 focus:bg-neutral-50 dark:focus:bg-neutral-900 focus:border-neutral-300 shadow shadow-black/[0.05] border-neutral-200 text-neutral-700 hover:text-neutral-900 focus:outline-violet-500";

    const apprStyles = {
      primary:
        "bg-violet-600 border-violet-700 hover:bg-violet-700 hover:border-violet-800 focus:bg-violet-700 focus:border-violet-800 dark:border-transparent dark:border-t-violet-500 shadow shadow-black/[0.05] text-white focus:outline-violet-500",
      inverted:
        "bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:border-transparent border-neutral-900 hover:bg-neutral-900 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 focus:bg-neutral-900 shadow shadow-black/[0.05] text-white focus:outline-neutral-500",
      ghost:
        "border-transparent dark:text-neutral-300 dark:hover:text-neutral-100 dark:hover:bg-neutral-900 hover:bg-neutral-200 dark:focus:bg-neutral-900 dark:focus:text-neutral-100 focus:bg-neutral-200 text-neutral-700 focus:outline-violet-500",
    };

    const loadingStyles = "opacity-60 pointer-events-none";

    return (
      <button
        class={clsx(
          isLoading && loadingStyles,
          baseStyles,
          !appr && defaultStyles,
          appr && apprStyles[appr],
          styles,
        )}
        {...props}
        disabled={isDisabled}
        aria-disabled={isDisabled || isLoading}
      >
        <Slot />
      </button>
    );
  },
);

export default Button;
