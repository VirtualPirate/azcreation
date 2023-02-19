import "../styles/globals.css";
import "../styles/themes.css";

import type { AppProps } from "next/app";

import { ThemeContextProvider } from "../contexts/theme.context";
import { SideNavContextProvider } from "../contexts/side-nav.context";
import { GalleryDialogContextProvider } from "../contexts/gallery-dialog.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <SideNavContextProvider>
        <GalleryDialogContextProvider>
          <Component {...pageProps} />
        </GalleryDialogContextProvider>
      </SideNavContextProvider>
    </ThemeContextProvider>
  );
}
