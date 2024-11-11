import { useRef } from "react";
import { motion } from "framer-motion";
import { Home, Phone, Stethoscope, Activity, Heart, FlaskConical } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import WhatsAppButton from "../components/WhatsAppButton";

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
    <div className="min-h-screen bg-[#003366] py-24">
      <div className="container mx-auto px-4">
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
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-right h-full border border-white/10 hover:border-white/20 transition-all duration-300">
                    <service.icon className="w-12 h-12 text-white mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{service.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 flex justify-between items-center">
              <CarouselPrevious className="relative left-0 h-12 w-12 rounded-full border-2 border-white/20 bg-white/10 hover:bg-white/20" />
              <CarouselNext className="relative right-0 h-12 w-12 rounded-full border-2 border-white/20 bg-white/10 hover:bg-white/20" />
            </div>
          </Carousel>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Services;