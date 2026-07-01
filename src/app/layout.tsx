import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Alifarse",
  description: "Productos veterinarios de alta calidad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
         <main className="pt-20">
        {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}