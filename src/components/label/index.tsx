import { Slot, component$ } from "@builder.io/qwik";
import clsx from "clsx";

interface ILabel {
  appr?: "primary" | "inverted" | "bordered";
}

const Label = component$<ILabel>(({ appr }) => {
  const apprStyles = {
    inverted:
      "bg-neutral-800 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-950 border-transparent",
    primary:
      "bg-violet-500/20 text-violet-800 dark:bg-violet-500/10 dark:text-violet-400 border-transparent",
    bordered:
      "bg-transparent border-neutral-300 text-neutral-700 dark:text-neutral-200 dark:border-neutral-900",
  };

  return (
    <span
      class={clsx(
        "inline-flex rounded-full border px-3 py-1 text-sm font-medium",
        !appr &&
          "border-neutral-300 bg-neutral-100 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200",
        appr && apprStyles[appr],
      )}
    >
      <Slot />
    </span>
  );
});

export default Label;
