import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import WhatsAppButton from "../components/WhatsAppButton";
import { Home, Phone, Stethoscope, Activity, Heart, Flask } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "زيارة طبيب منزلية",
      description: "نوفر خدمة زيارة الطبيب المنزلية مع نخبة من الأطباء المتخصصين في مختلف المجالات الطبية. نضمن لك رعاية طبية عالية الجودة في راحة منزلك.",
      icon: Home,
    },
    {
      title: "استشارات طبية هاتفية",
      description: "احصل على استشارة طبية فورية عبر الهاتف من أطباء متخصصين. خدمة متاحة على مدار الساعة للإجابة على استفساراتك الطبية.",
      icon: Phone,
    },
    {
      title: "التمريض المنزلي",
      description: "فريق تمريض مؤهل يقدم خدمات الرعاية التمريضية في منزلك. نوفر رعاية ما بعد العمليات الجراحية والرعاية المستمرة للحالات المزمنة.",
      icon: Stethoscope,
    },
    {
      title: "العلاج الطبيعي",
      description: "جلسات علاج طبيعي متخصصة في منزلك مع أخصائيين مؤهلين. نساعدك في التعافي وتحسين قدراتك الحركية بأحدث تقنيات العلاج الطبيعي.",
      icon: Activity,
    },
    {
      title: "رعاية كبار السن",
      description: "خدمات رعاية شاملة لكبار السن تشمل المتابعة الطبية، الرعاية الشخصية، والدعم النفسي. نضمن راحة ورفاهية المسنين في منازلهم.",
      icon: Heart,
    },
    {
      title: "فحوصات مخبرية",
      description: "خدمة سحب العينات وإجراء التحاليل المخبرية في منزلك. نوفر نتائج دقيقة وسريعة مع الحفاظ على أعلى معايير الجودة.",
      icon: Flask,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          خدماتنا الطبية
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Services;