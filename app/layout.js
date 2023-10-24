import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { CartProvider } from "./components/CartContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop",
  description: "PW RETO SEMANAL - SHOP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <CartProvider>
        <body className={inter.className}>{children}</body>
      </CartProvider>
    </html>
  );
}
