import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/01113939319"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#128C7E] transition-colors z-50 animate-bounce"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;