import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

interface LayoutProps {
  children: ReactNode;
  cartItems?: number;
}

export const Layout = ({ children, cartItems }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartItems={cartItems} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};