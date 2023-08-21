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
import LucideX from "~icons/lucide/x";

const ModalContext = createContextId<Signal<boolean>>("modal-context");

export const ModalProvider = component$(() => {
  const opened = useSignal(false);

  useContextProvider(ModalContext, opened);

  return (
    <div class="relative inline-flex">
      <ModalConsumer>
        <Slot />
      </ModalConsumer>
    </div>
  );
});

export const useModalContext = () => useContext(ModalContext);

const ModalConsumer = component$(() => {
  const opened = useModalContext();

  return <Slot />;
});

export const ModalTrigger = component$(() => {
  const opened = useModalContext();

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

export const Modal = component$(() => {
  const opened = useModalContext();

  return opened.value ? (
    <div
      onClick$={() => (opened.value = !opened.value)}
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 dark:bg-black/60"
    >
      <div
        onClick$={(e) => e.stopPropagation()}
        class="relative mt-2 w-full max-w-lg rounded-xl border border-transparent bg-white p-6 shadow-xl shadow-black/[0.05] dark:border-transparent dark:bg-neutral-900"
      >
        <Slot />
      </div>
    </div>
  ) : null;
});

export const ModalHeader = component$(() => {
  const opened = useModalContext();

  return (
    <header class="mb-4">
      <p class="font-semibold text-neutral-900 dark:text-neutral-100">
        <Slot />
      </p>
      <p class="text-sm text-neutral-700 dark:text-neutral-500">
        <Slot name="desc" />
      </p>
    </header>
  );
});

export const ModalBody = component$(() => {
  return (
    <main class="py-2">
      <Slot />
    </main>
  );
});

export const ModalActions = component$(() => {
  return (
    <footer class="mt-6 flex items-center justify-end">
      <Slot />
    </footer>
  );
});

export const ModalDismissTrigger = component$(() => {
  const opened = useModalContext();

  return (
    <div
      onClick$={() => (opened.value = !opened.value)}
      class="inline-flex"
      role="button"
    >
      <Slot />
    </div>
  );
});
