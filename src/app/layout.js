import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const Jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Uslybe",
  description: "Connect With Your Friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Jakarta.className}>{children}</body>
    </html>
  );
}
