import Hero from "../components/Hero";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Hero />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;