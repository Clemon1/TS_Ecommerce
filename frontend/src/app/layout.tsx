import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--fontInter",
});
const roboto = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--fontRoboto",
});
export const metadata: Metadata = {
  title: "ShopAll",
  description: "Get everything you desire.",
};

const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>

      <body className={`${roboto.variable}  ${inter.variable}`}>
        <MantineProvider theme={theme}>
          <Navbar />

          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
