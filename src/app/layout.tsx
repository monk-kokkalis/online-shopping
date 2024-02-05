import type { Metadata } from "next";
import "./globals.css";
import { montserratFontClass } from "./lib/font";
import clsx from "clsx";
import ReactQueryProvider from "./lib/react-query/ReactQueryProvider";
import ReduxProvider from "./lib/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Home",
  description: "Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(montserratFontClass, 'min-h-screen')}>
        <ReactQueryProvider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
