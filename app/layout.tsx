import '@/app/ui/global.css';
import { BeVietnamPro } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${BeVietnamPro.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
