import { $, component$, inlinedQrl, qrl, useSignal } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import Button from "~/components/button/button";
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownItemKeybind,
  DropdownRoot,
  DropdownTrigger,
  SubDropdown,
} from "~/components/dropdown";
import LucideArrowRight from "~icons/lucide/arrow-right";
import LucideLoader2 from "~icons/lucide/loader-2";
import LucideCheck from "~icons/lucide/check";
import LucideCommand from "~icons/lucide/command";
import LucideArrowBigUp from "~icons/lucide/arrow-big-up";
import LucideMoon from "~icons/lucide/moon";
import LucideView from "~icons/lucide/view";
import { useTheme } from "~/context/theme";
import LucideSun from "~icons/lucide/sun";
import {
  Modal,
  ModalActions,
  ModalBody,
  ModalDismissTrigger,
  ModalHeader,
  ModalProvider,
  ModalTrigger,
} from "~/components/modal";
import LucideBrush from "~icons/lucide/brush";
import LucideLayout from "~icons/lucide/layout";
import LucideLayoutList from "~icons/lucide/layout-list";
import LucideFileSearch from "~icons/lucide/file-search";
import LucideGitBranch from "~icons/lucide/git-branch";
import Input from "~/components/input";
import Radio from "~/components/radio";
import ShowcaseMenu from "~/ui/menu";
import Label from "~/components/label";
import LucideShapes from "~icons/lucide/shapes";
import LucideLibrary from "~icons/lucide/library";

export default component$(() => {
  const theme = useTheme();
  const loading = useSignal(false);

  return (
    <div
      style={{ fontFamily: "'Inter', 'sans-serif'" }}
      class="min-h-screen dark:bg-neutral-950"
    >
      <header class="border-b px-8 py-2 dark:border-neutral-900">
        <Link
          href="/"
          class="flex items-baseline space-x-1.5 text-xl font-bold tracking-tight dark:text-neutral-100"
        >
          <LucideLibrary class="h-7 w-7 stroke-2" />
          <span>ZeUI</span>
        </Link>
      </header>
      <div class="space-x-2 p-4">
        <div class="my-10 ml-2">
          <h1 class="mb-2 text-5xl font-extrabold tracking-tight text-neutral-800 dark:text-neutral-100">
            ZeUI
          </h1>
          <p class="text-neutral-700 dark:text-neutral-500">
            Open-source components for Qwik. No headless kit was used and was
            built literally for fun. Just use it for simple projects xD.
          </p>
        </div>

        <div class="mb-4 ml-2">
          <Button
            appr="inverted"
            onClick$={() => {
              theme.value = theme.value === "dark" ? "light" : "dark";
              // console.log(theme.value);
            }}
            styles="items-center capitalize"
          >
            {theme.value === "dark" ? (
              <>
                Light Mode
                <LucideSun class="ml-2 stroke-2" />
              </>
            ) : (
              <>
                Dark Mode
                <LucideMoon class="ml-2 stroke-2" />
              </>
            )}
          </Button>
        </div>
        <Button styles="items-center">
          Sign up <LucideArrowRight class="ml-2 stroke-2" />
        </Button>
        <Button appr="primary" styles="items-center">
          Sign up <LucideArrowRight class="ml-2 stroke-2" />
        </Button>
        <Button appr="inverted" styles="items-center">
          Sign up <LucideArrowRight class="ml-2 stroke-2" />
        </Button>
        <Button appr="ghost" styles="items-center">
          Sign up <LucideArrowRight class="ml-2 stroke-2" />
        </Button>

        <Button
          appr="primary"
          onClick$={() => (loading.value = true)}
          isLoading={loading.value}
          styles="items-center"
        >
          {loading.value ? (
            <>
              Submitting
              <LucideLoader2 class="ml-2 animate-spin stroke-2" />
            </>
          ) : (
            <>
              Submit
              <LucideArrowRight class="ml-2 stroke-2" />
            </>
          )}
        </Button>

        <Button styles="items-center" isDisabled={true}>
          This button is not available{" "}
          <LucideArrowRight class="ml-2 stroke-2" />
        </Button>
        <ModalProvider>
          <ModalTrigger>
            <Button>Open Modal</Button>
          </ModalTrigger>

          <Modal>
            <ModalHeader>
              Create your account
              <span q:slot="desc">
                Sign up first to continue browsing to QUI
              </span>
            </ModalHeader>
            <ModalBody>
              <div class="group">
                <label class="mb-1 block text-sm text-neutral-700 dark:text-neutral-500 dark:group-focus-within:text-neutral-300">
                  Email Address
                </label>
                <input
                  type="email"
                  class="block w-full rounded-lg border border-neutral-200 border-b-neutral-300 px-3 py-2 text-sm shadow shadow-black/[0.05] outline-none outline outline-2 -outline-offset-2 outline-transparent focus:outline-violet-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:focus:text-neutral-100"
                />
              </div>

              <div class="group my-4">
                <label class="mb-1 block text-sm text-neutral-700 dark:text-neutral-500 dark:group-focus-within:text-neutral-300">
                  Username
                </label>
                <input
                  type="email"
                  class="block w-full rounded-lg border border-neutral-200 border-b-neutral-300 px-3 py-2 text-sm shadow shadow-black/[0.05] outline-none outline outline-2 -outline-offset-2 outline-transparent focus:outline-violet-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:focus:text-neutral-100"
                />
              </div>

              <div class="flex items-center space-x-4">
                <div class="group">
                  <label class="mb-1 block text-sm text-neutral-700 dark:text-neutral-500 dark:group-focus-within:text-neutral-300">
                    Password
                  </label>
                  <input
                    type="password"
                    class="block w-full rounded-lg border border-neutral-200 border-b-neutral-300 px-3 py-2 text-sm shadow shadow-black/[0.05] outline-none outline outline-2 -outline-offset-2 outline-transparent focus:outline-violet-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:focus:text-neutral-100"
                  />
                </div>
                <div class="group">
                  <label
                    for="confirm_pass"
                    class="mb-1 block text-sm text-neutral-700 dark:text-neutral-500 dark:group-focus-within:text-neutral-300"
                  >
                    Confirm
                  </label>
                  <Input type="password" name="confirm_pass" />
                </div>
              </div>
            </ModalBody>
            <ModalActions>
              <ModalDismissTrigger>
                <Button>Cancel</Button>
              </ModalDismissTrigger>
              <Button appr="primary" styles="ml-2">
                Create
              </Button>
            </ModalActions>
          </Modal>
        </ModalProvider>

        <DropdownRoot>
          <DropdownTrigger>
            <Button>Dropdown</Button>
          </DropdownTrigger>

          <Dropdown>
            <DropdownItem styles="items-center">
              <LucideCommand class="mr-3 stroke-2 dark:text-neutral-600" />
              <span>Command Palette</span>
              <DropdownItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>P</span>
              </DropdownItemKeybind>
            </DropdownItem>
            <DropdownItem styles="items-center">
              <LucideView class="mr-3 stroke-2 dark:text-neutral-600" />
              <span>Open View</span>
            </DropdownItem>
            <DropdownItem styles="items-center">
              <LucideBrush class="mr-3 stroke-2 dark:text-neutral-600" />
              <span>Appearance</span>
            </DropdownItem>
            <DropdownItem styles="items-center">
              <LucideLayout class="mr-3 stroke-2 dark:text-neutral-600" />
              <span>Editor Layout</span>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem styles="items-center">
              <LucideLayout class="mr-3 stroke-2 dark:text-neutral-600" />
              <span>Explorer</span>
              <DropdownItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>E</span>
              </DropdownItemKeybind>
            </DropdownItem>
            <DropdownItem styles="items-center">
              <LucideFileSearch class="mr-3 stroke-2 dark:text-neutral-600" />
              <span>Search</span>
              <DropdownItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>F</span>
              </DropdownItemKeybind>
            </DropdownItem>
            <DropdownItem styles="items-center">
              <LucideGitBranch class="mr-3 stroke-2 dark:text-neutral-600" />
              <span>Source Control</span>
              <DropdownItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>G</span>
              </DropdownItemKeybind>
            </DropdownItem>
          </Dropdown>
        </DropdownRoot>
        <div class="mt-8 flex items-center space-x-4">
          <Input name="test" styles="w-max" placeholder="This is an input" />
          {/* <Input name="test_2" />
        <Input name="test_3" /> */}
        </div>

        <div class="mt-8 block">
          <ShowcaseMenu />
          <div class="mt-8 flex space-x-4">
            <Radio text="Tailwind" name="framework" />
            <Radio text="Bootstrap" name="framework" />
            <Radio text="Bulma" name="framework" />

            <div class="space-x-2">
              <Label>Default</Label>
              <Label appr="inverted">Inverted</Label>
              <Label appr="primary">Primary</Label>
              <Label appr="bordered">Bordered</Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "QUI",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
