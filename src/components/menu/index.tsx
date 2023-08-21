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
  useStore,
} from "@builder.io/qwik";
import { LinkProps } from "@builder.io/qwik-city";
import { clsx } from "clsx";
import LucideChevronRight from "~icons/lucide/chevron-right";

const MenuContext = createContextId<{ hasOpened: boolean; opened: string }>(
  "menu-context",
);

export const MenuRoot = component$(() => {
  const opened = useSignal(false);
  const store = useStore({
    hasOpened: false,
    opened: "",
  });
  const hasOpened = useSignal(false);

  useContextProvider(MenuContext, store);

  return (
    <div class="relative inline-flex">
      <MenuConsumer>
        <Slot />
      </MenuConsumer>
    </div>
  );
});

export const useMenuContext = () => useContext(MenuContext);

const MenuConsumer = component$(() => {
  const store = useMenuContext();

  return (
    <>
      {store.hasOpened && (
        <div
          onClick$={() => {
            store.opened = "";
            store.hasOpened = false;
          }}
          class="fixed inset-0"
        ></div>
      )}
      <Slot />
    </>
  );
});

export const MenuContainer = component$(() => {
  const opened = useMenuContext();

  return (
    <div class="relative flex items-center">
      <Slot />
    </div>
  );
});

const MenuItemContext = createContextId<Signal<string>>("menu-item.context");

export const MenuListItem = component$(() => {
  const opened = useSignal("64506jgfdgd");

  useContextProvider(MenuItemContext, opened);

  return (
    <div class="relative inline-flex">
      <Slot />
    </div>
  );
});

const useMenuItemContext = () => useContext(MenuItemContext);

export const Menu = component$(() => {
  const store = useMenuContext();
  const opened = useMenuItemContext();

  return store.opened === opened.value ? (
    <div class="absolute left-0 top-full mt-2 w-max min-w-[200px] rounded-lg border border-neutral-200 border-b-neutral-300 bg-white py-1 shadow-xl shadow-black/[0.05] dark:border-transparent dark:bg-neutral-900">
      <Slot />
    </div>
  ) : null;
});

export const MenuItemTrigger = component$(({ text }: { text: string }) => {
  const store = useMenuContext();
  const opened = useMenuItemContext();

  return (
    <button
      onMouseEnter$={() => {
        if (store.hasOpened) {
          store.opened = text;
          opened.value = text;
        }
      }}
      onClick$={() => {
        if (store.opened) {
          store.opened = "";
          store.hasOpened = false;
        } else {
          store.opened = text;
          opened.value = text;
          store.hasOpened = true;
        }
      }}
      class={clsx(
        "inline-flex rounded-md px-2 py-1 text-sm font-medium outline-violet-500",
        store.opened === text
          ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
          : "text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100",
      )}
    >
      {text}
    </button>
  );
});

export const SubMenu = component$(() => {
  return (
    <div class="absolute left-full top-0 -ml-2 w-max min-w-[200px] rounded-lg border border-neutral-200 border-b-neutral-300 bg-white py-1 shadow-xl shadow-black/[0.05] dark:border-transparent dark:bg-neutral-900">
      <Slot />
    </div>
  );
});

export const MenuItem = component$(
  (
    props: {
      styles?: string;
      as?: Component<any> | string;
      type?: any;
      hasSubMenu?: boolean;
    } & HTMLAttributes<HTMLElement> &
      LinkProps,
  ) => {
    const Comp = props.as ?? "button";
    const openSubMenu = useSignal(false);

    return props.hasSubMenu ? (
      <Comp
        {...props}
        onMouseEnter$={() => (openSubMenu.value = true)}
        onMouseLeave$={() => (openSubMenu.value = false)}
        class={clsx(
          "relative flex w-full px-3 py-1.5 text-sm text-neutral-700 outline-offset-2 outline-violet-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",
          props.styles,
        )}
      >
        <Slot />
        <LucideChevronRight class="ml-auto stroke-2" />
        {/* {props.subMenu$()} */}
        {openSubMenu.value && <Slot name="subMenu" />}
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

export const MenuDivider = component$(() => {
  return (
    <div class="my-2 w-full border-t border-slate-100 dark:border-neutral-800" />
  );
});

export const MenuItemKeybind = component$(({ styles }: { styles?: string }) => {
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
});
