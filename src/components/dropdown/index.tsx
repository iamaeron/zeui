import {
  Component,
  HTMLAttributes,
  Signal,
  Slot,
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { LinkProps } from "@builder.io/qwik-city";
import { clsx } from "clsx";
import LucideChevronRight from "~icons/lucide/chevron-right";

const DropdownContext = createContextId<Signal<boolean>>("dropdown-context");

export const DropdownRoot = component$(() => {
  const opened = useSignal(false);

  useContextProvider(DropdownContext, opened);

  return (
    <div class="relative inline-flex">
      <DropdownConsumer>
        <Slot />
      </DropdownConsumer>
    </div>
  );
});

export const useDropdownContext = () => useContext(DropdownContext);

const DropdownConsumer = component$(() => {
  const opened = useDropdownContext();

  return (
    <>
      {opened.value && (
        <div
          onClick$={() => (opened.value = !opened.value)}
          class="fixed inset-0 z-50"
        ></div>
      )}
      <Slot />
    </>
  );
});

export const DropdownTrigger = component$(() => {
  const opened = useDropdownContext();

  return (
    <div
      class="relative inline-flex"
      onClick$={() => (opened.value = !opened.value)}
      role="button"
    >
      <Slot />
    </div>
  );
});

export const Dropdown = component$(() => {
  const opened = useDropdownContext();

  return opened.value ? (
    <div class="absolute left-0 top-full z-[60] mt-2 w-max min-w-[200px] rounded-lg border border-neutral-200 border-b-neutral-300 bg-white py-1 shadow-xl shadow-black/[0.05] dark:border-transparent dark:bg-neutral-900">
      <Slot />
    </div>
  ) : null;
});

export const SubDropdown = component$(() => {
  const opened = useDropdownContext();

  return (
    <div class="absolute left-full top-0 z-[60] -ml-2 w-max min-w-[200px] rounded-lg border border-neutral-200 border-b-neutral-300 bg-white py-1 shadow-xl shadow-black/[0.05] dark:border-transparent dark:bg-neutral-900">
      <Slot />
    </div>
  );
});

export const DropdownItem = component$(
  (
    props: {
      styles?: string;
      as?: Component<any> | string;
      type?: any;
      hasSubDropdown?: boolean;
    } & HTMLAttributes<HTMLElement> &
      LinkProps,
  ) => {
    const Comp = props.as ?? "button";
    const openSubDropdown = useSignal(false);

    return props.hasSubDropdown ? (
      <Comp
        {...props}
        onMouseEnter$={() => (openSubDropdown.value = true)}
        onMouseLeave$={() => (openSubDropdown.value = false)}
        class={clsx(
          "relative flex w-full px-3 py-1.5 text-sm text-neutral-700 outline-offset-2 outline-violet-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
          props.styles,
        )}
      >
        <Slot />
        <LucideChevronRight class="ml-auto stroke-2" />
        {/* {props.subDropdown$()} */}
        {openSubDropdown.value && <Slot name="subDropdown" />}
      </Comp>
    ) : (
      <Comp
        {...props}
        class={clsx(
          "flex w-full px-3 py-1.5 text-sm text-neutral-700 outline-offset-2 outline-violet-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
          props.styles,
        )}
      >
        <Slot />
      </Comp>
    );
  },
);

export const DropdownDivider = component$(() => {
  return (
    <div class="my-2 w-full border-t border-slate-100 dark:border-neutral-800" />
  );
});

export const DropdownItemKeybind = component$(
  ({ styles }: { styles?: string }) => {
    return (
      <span class="ml-auto">
        <span
          class={clsx(
            "ml-10 flex text-xs font-medium text-neutral-400 dark:text-neutral-600",
            styles,
          )}
        >
          <Slot />
        </span>
      </span>
    );
  },
);
