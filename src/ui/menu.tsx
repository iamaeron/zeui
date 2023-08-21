import {
  Menu,
  MenuContainer,
  MenuDivider,
  MenuItem,
  MenuItemKeybind,
  MenuItemTrigger,
  MenuListItem,
  MenuRoot,
  SubMenu,
} from "~/components/menu";
import LucideCheck from "~icons/lucide/check";
import LucideCommand from "~icons/lucide/command";
import LucideArrowBigUp from "~icons/lucide/arrow-big-up";
import { component$ } from "@builder.io/qwik";

const ShowcaseMenu = component$(() => {
  return (
    <MenuRoot>
      <MenuContainer>
        <MenuListItem>
          <MenuItemTrigger text="File" />

          <Menu>
            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>New Text File</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>N</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>New File</span>
              <MenuItemKeybind>
                <span>Alt</span>
                <LucideCommand class="mx-1 stroke-2" />
                <span>N</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>New Window</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>N</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuDivider />
            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>Open File</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>O</span>
              </MenuItemKeybind>
            </MenuItem>

            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>Open Folder</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>O</span>

                <LucideCommand class="mx-1 stroke-2" />
                <span>K</span>
              </MenuItemKeybind>
            </MenuItem>

            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>Open Workspace from File</span>
            </MenuItem>

            <MenuItem hasSubMenu styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>Open Recent</span>

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
            <MenuDivider />
            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2" />
              <span>Add Folder to Workspace</span>
            </MenuItem>
            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>Save Workspace As</span>
            </MenuItem>
            <MenuItem styles="items-center">
              <LucideCheck class="mr-2 stroke-2 opacity-0" />
              <span>Duplicate Workspace</span>
            </MenuItem>
          </Menu>
        </MenuListItem>

        <MenuListItem>
          <MenuItemTrigger text="Edit" />

          <Menu>
            <MenuItem>
              <span>Undo</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>Z</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Redo</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>Y</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <span>Cut</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>X</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Copy</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>C</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Paste</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>V</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <span>Find</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>F</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Replace</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <span>H</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <span>Find in Files</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>F</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Replace in Files</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>H</span>
              </MenuItemKeybind>
            </MenuItem>
          </Menu>
        </MenuListItem>

        <MenuListItem>
          <MenuItemTrigger text="Selection" />

          <Menu>
            <MenuItem>
              <span>Select All</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>H</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Expand Selection</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>H</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Shrink Selection</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>H</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <span>Copy Line Up</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>H</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Copy Line Down</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>H</span>
              </MenuItemKeybind>
            </MenuItem>
            <MenuItem>
              <span>Move Line Up</span>
              <MenuItemKeybind>
                <LucideCommand class="mr-1 stroke-2" />
                <LucideArrowBigUp class="mr-1 stroke-2" />
                <span>H</span>
              </MenuItemKeybind>
            </MenuItem>
          </Menu>
        </MenuListItem>

        <MenuListItem>
          <MenuItemTrigger text="View" />

          <Menu>
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
          <MenuItemTrigger text="Go" />
        </MenuListItem>

        <MenuListItem>
          <MenuItemTrigger text="Run" />
        </MenuListItem>

        <MenuListItem>
          <MenuItemTrigger text="Terminal" />
        </MenuListItem>

        <MenuListItem>
          <MenuItemTrigger text="Help" />
        </MenuListItem>
      </MenuContainer>
    </MenuRoot>
  );
});

export default ShowcaseMenu;
