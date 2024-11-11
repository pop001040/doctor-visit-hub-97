import { useRef } from "react";
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">خدماتنا الطبية</h1>
        <p className="text-gray-600 text-center mb-16">نقدم مجموعة متكاملة من الخدمات الطبية الرائدة لضمان راحتك وصحتك</p>
        
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="relative"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-0">
                  <div className="flex flex-col items-center text-center p-8">
                    <service.icon className="w-16 h-16 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 h-12 w-12" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 h-12 w-12" />
          </Carousel>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Services;