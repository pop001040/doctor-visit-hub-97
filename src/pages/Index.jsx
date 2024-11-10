import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ContactButtons from "../components/ContactButtons";
import { Home, Phone, Stethoscope, Activity, Heart, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";

const Index = () => {
  const services = [
    {
      title: "زيارة طبيب منزلية",
      description: "خدمة طبية متكاملة في منزلك مع أفضل الأطباء المتخصصين",
      icon: Home,
    },
    {
      title: "استشارات طبية هاتفية",
      description: "تواصل مع أطبائنا عبر الهاتف للحصول على الاستشارة الطبية",
      icon: Phone,
    },
    {
      title: "التمريض المنزلي",
      description: "رعاية تمريضية متخصصة على مدار الساعة في منزلك",
      icon: Stethoscope,
    },
    {
      title: "العلاج الطبيعي",
      description: "جلسات علاج طبيعي متخصصة لتحسين صحتك وعافيتك",
      icon: Activity,
    },
    {
      title: "رعاية كبار السن",
      description: "خدمات رعاية متكاملة لكبار السن في منازلهم",
      icon: Heart,
    },
    {
      title: "فحوصات مخبرية",
      description: "سحب عينات وإجراء الفحوصات المخبرية في منزلك",
      icon: FlaskConical,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <ParallaxSection className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
      <ContactButtons />
    </div>
  );
};

export default Index;