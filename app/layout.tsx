import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Starlink",
  description: "Clone by NSC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-black text-white antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}