import { MessageCircle } from "lucide-react";
import { Button } from "./button";

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number (with country code)
    const message = "Hi! मुझे आपके custom neon signs के बारे में जानकारी चाहिए।";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        variant="neon"
        size="lg"
        className="rounded-full w-14 h-14 p-0 shadow-lg hover:scale-110 transition-transform duration-300 float"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};