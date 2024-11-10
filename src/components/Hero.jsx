import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/physical-therapy.jpg')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            خدمة جلسات
            <br />
            العلاج الطبيعي بالمنزل
          </motion.h1>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2 text-lg px-8"
              onClick={() => window.location.href = "tel:01113939319"}
            >
              <Phone className="w-5 h-5" />
              الهاتف
            </Button>
            
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 text-lg px-8"
              onClick={() => window.open("https://wa.me/01113939319", "_blank")}
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 text-white text-right max-w-2xl mx-auto space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg">- أفضل أخصائيين معتمدين من وزارة الصحة</p>
            <p className="text-lg">- الأخصائي المناسب حسب الحالة الصحية والعلاج المطلوب</p>
            <p className="text-lg">- خطة علاجية منذ أول جلسة، ومتابعة دائمة لتطور الحالة</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;