import "@mantine/core/styles.css";
import { MantineProvider, mantineHtmlProps } from "@mantine/core";
import { theme } from "../theme";

export const metadata = {
  title: "Brave Hearts",
  description: "interactive children's book",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
