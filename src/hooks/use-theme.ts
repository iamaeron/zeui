import { useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default function useTheme() {
  const theme = useSignal("light");
  const colorTheme = useSignal(theme.value === "dark" ? "light" : "dark");

  // useVisibleTask$(() => {
  //   const existingValue = localStorage.getItem("qui-theme");

  //   if (existingValue) {
  //     theme.value = existingValue;
  //     colorTheme.value = theme.value === "dark" ? "light" : "dark";
  //   } else {
  //     localStorage.setItem("qui-theme", theme.value);
  //   }
  // });

  // useVisibleTask$(({ track }) => {
  //   const val = track(() => theme.value);

  //   const el = document.body;
  //   el.classList.remove(colorTheme.value);
  //   el.classList.add(val);
  //   localStorage.setItem("qui-theme", val);
  // });

  return { theme, colorTheme };
}
