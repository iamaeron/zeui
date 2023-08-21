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
import LucideSunMoon from "~icons/lucide/sun-moon";
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
import {
  Menu,
  MenuContainer,
  MenuListItem,
  MenuItemTrigger,
  MenuRoot,
  MenuItem,
  MenuItemKeybind,
  SubMenu,
} from "~/components/menu";

export default component$(() => {
  const theme = useTheme();
  const loading = useSignal(false);

  return (
    <div
      style={{ fontFamily: "'Inter', 'sans-serif'" }}
      class="min-h-screen space-x-2 p-4 pt-20 dark:bg-neutral-950"
    >
      <div class="mb-6 ml-2">
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

      {/* <Button
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
      </Button> */}

      <Button styles="items-center" isDisabled={true}>
        This button is not available <LucideArrowRight class="ml-2 stroke-2" />
      </Button>
      <ModalProvider>
        <ModalTrigger>
          <Button>Open Modal</Button>
        </ModalTrigger>

        <Modal>
          <ModalHeader>
            Create your account
            <span q:slot="desc">Sign up first to continue browsing to QUI</span>
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
                <label class="mb-1 block text-sm text-neutral-700 dark:text-neutral-500 dark:group-focus-within:text-neutral-300">
                  Confirm
                </label>
                <input
                  type="password"
                  class="block w-full rounded-lg border border-neutral-200 border-b-neutral-300 px-3 py-2 text-sm shadow shadow-black/[0.05] outline-none outline outline-2 -outline-offset-2 outline-transparent focus:outline-violet-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:focus:text-neutral-100"
                />
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
          <DropdownItem as={Link} href="/" styles="items-center">
            <LucideCheck class="mr-2 stroke-2 opacity-0" />
            <span>Command Palette</span>
            <DropdownItemKeybind>
              <LucideCommand class="mr-1 stroke-2" />
              <LucideArrowBigUp class="mr-1 stroke-2" />
              <span>P</span>
            </DropdownItemKeybind>
          </DropdownItem>
          <DropdownItem styles="items-center">
            <LucideCheck class="mr-2 stroke-2" />
            <span>Open View</span>
          </DropdownItem>
          <DropdownItem hasSubDropdown={true} styles="items-center">
            <LucideCheck class="mr-2 stroke-2 opacity-0" />
            <span>Appearance</span>

            <SubDropdown q:slot="subDropdown">
              <DropdownItem styles="items-center">
                <LucideCheck class="mr-2 stroke-2" />
                <span>Open View</span>
              </DropdownItem>
              <DropdownItem styles="items-center">
                <LucideCheck class="mr-2 stroke-2 opacity-0" />
                <span>Editor Layout</span>
              </DropdownItem>
            </SubDropdown>
          </DropdownItem>
          <DropdownItem styles="items-center">
            <LucideCheck class="mr-2 stroke-2 opacity-0" />
            <span>Editor Layout</span>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem styles="items-center">
            <LucideCheck class="mr-2 stroke-2 opacity-0" />
            <span>Explorer</span>
            <DropdownItemKeybind>
              <LucideCommand class="mr-1 stroke-2" />
              <LucideArrowBigUp class="mr-1 stroke-2" />
              <span>E</span>
            </DropdownItemKeybind>
          </DropdownItem>
          <DropdownItem styles="items-center">
            <LucideCheck class="mr-2 stroke-2 opacity-0" />
            <span>Search</span>
            <DropdownItemKeybind>
              <LucideCommand class="mr-1 stroke-2" />
              <LucideArrowBigUp class="mr-1 stroke-2" />
              <span>F</span>
            </DropdownItemKeybind>
          </DropdownItem>
          <DropdownItem styles="items-center">
            <LucideCheck class="mr-2 stroke-2 opacity-0" />
            <span>Source Control</span>
            <DropdownItemKeybind>
              <LucideCommand class="mr-1 stroke-2" />
              <LucideArrowBigUp class="mr-1 stroke-2" />
              <span>G</span>
            </DropdownItemKeybind>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem styles="items-center">
            <LucideCheck class="opacity-1 mr-2 stroke-2" />
            <span>Word Wrap</span>
            <DropdownItemKeybind>
              <span class="mr-1">Alt</span>
              <span>Z</span>
            </DropdownItemKeybind>
          </DropdownItem>
          <DropdownItem styles="items-center">
            <LucideCheck class="opacity-1 mr-2 stroke-2" />
            <span>Sticky Scroll</span>
          </DropdownItem>
        </Dropdown>
      </DropdownRoot>

      <MenuRoot>
        <MenuContainer>
          <MenuListItem>
            <MenuItemTrigger text="File" />

            <Menu>Hi</Menu>
          </MenuListItem>

          <MenuListItem>
            <MenuItemTrigger text="Edit" />

            <Menu>
              <MenuItem as={Link} href="/" styles="items-center">
                <LucideCheck class="mr-2 stroke-2 opacity-0" />
                <span>Command Palette</span>
                <MenuItemKeybind>
                  <LucideCommand class="mr-1 stroke-2" />
                  <LucideArrowBigUp class="mr-1 stroke-2" />
                  <span>P</span>
                </MenuItemKeybind>
              </MenuItem>
              <MenuItem styles="items-center">
                <LucideCheck class="mr-2 stroke-2" />
                <span>Open View</span>
              </MenuItem>
              <MenuItem hasSubMenu={true} styles="items-center">
                <LucideCheck class="mr-2 stroke-2 opacity-0" />
                <span>Appearance</span>

                <SubMenu q:slot="subMenu">
                  <MenuItem styles="items-center">
                    <LucideCheck class="mr-2 stroke-2" />
                    <span>Open View</span>
                  </MenuItem>
                  <MenuItem styles="items-center">
                    <LucideCheck class="mr-2 stroke-2 opacity-0" />
                    <span>Editor Layout</span>
                  </MenuItem>
                </SubMenu>
              </MenuItem>
            </Menu>
          </MenuListItem>

          <MenuListItem>
            <MenuItemTrigger text="Selection" />

            <Menu>Hi</Menu>
          </MenuListItem>

          <MenuListItem>
            <MenuItemTrigger text="View" />

            <Menu>Hi</Menu>
          </MenuListItem>
        </MenuContainer>
      </MenuRoot>
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
