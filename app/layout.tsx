import '@/app/ui/global.css';
import { noto_Sans_Lepcha } from "@/app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_Sans_Lepcha.className} antialiased`}>{children}</body>
    </html>
  );
}
