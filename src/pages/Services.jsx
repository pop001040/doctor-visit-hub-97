import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import WhatsAppButton from "../components/WhatsAppButton";
import { Home, Phone, Stethoscope, Activity, Heart, FlaskConical } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Services = () => {
  const plugin = useRef(
    Autoplay({ 
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

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
      icon: FlaskConical,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          خدماتنا الطبية
        </motion.h1>
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            plugins={[plugin.current]}
            className="relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 transition-all duration-300">
                  <ServiceCard {...service} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 flex justify-between items-center">
              <CarouselPrevious className="relative left-0 h-12 w-12 rounded-full border-2 border-primary/20 bg-white/80 hover:bg-white" />
              <CarouselNext className="relative right-0 h-12 w-12 rounded-full border-2 border-primary/20 bg-white/80 hover:bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Services;