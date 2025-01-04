import "@/styles/globals.css";

import NavLinks from "@/components/nav-links";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <NavLinks />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
