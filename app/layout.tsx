/* COMPONENTS */
import { Providers } from "./providers";

/* FONTS */
import { Poppins } from "next/font/google";

/* METADATA */
import type { Metadata } from "next";

/* STYLES */
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sidebar App",
  description: "App para probar el componente sidebar",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
