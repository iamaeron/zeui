import {
  Signal,
  createContextId,
  useContext,
  useContextProvider,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";

interface Theme {
  theme: string;
}

export const ThemeContext = createContextId<Signal<string>>("theme");

export const useThemeProvider = () => {
  const theme = useSignal("");

  useContextProvider(ThemeContext, theme);

  useVisibleTask$(({ track }) => {
    const change = track(() => theme.value);

    /**
     * We set theme to an '' when initialized, make sure we grab the actual
     * value
     */
    if (!theme.value) {
      theme.value = localStorage.theme || "dark";
    }

    /**
     * Ignore non-initialized value
     */
    if (!change) return;

    /**
     * Make sure we are only updating the html class if we have to to avoid
     * uneccesary paint calls
     */
    if (document.documentElement.className !== change) {
      document.documentElement.className = change;
    }

    /**
     * Update our local storage if a change has occurred
     */
    localStorage.theme = change;
  });
};

export const useTheme = () => useContext(ThemeContext);
