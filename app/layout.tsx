import "./globals.css";
import Navbar from "@/components/Navbar";
import { VercelToolbar } from '@vercel/toolbar/next';

export const metadata = {
  title: "Starlink",
  description: "Clone by NSC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isPreview = process.env.VERCEL_ENV === 'preview' || process.env.NODE_ENV === 'development';

  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-black text-white antialiased" suppressHydrationWarning>
        <Navbar />
        {children}

        {isPreview && <VercelToolbar />}
      </body>
    </html>
  );
}