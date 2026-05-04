import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CLIX — היפר-אוטומציה לאנשי הביצוע",
  description:
    "סוכנות היפר-אוטומציה ישראלית. מהנדסים מיחידה 8200 ומהטכניון בונים סוכני AI, סוכני קול ואינטגרציות שמסירים צווארי בקבוק תלויי-אדם בעסק שלכם.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
