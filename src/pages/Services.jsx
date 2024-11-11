import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceCard from "../components/ServiceCard";
import { navItems } from "../nav-items";

const Services = () => {
  // Filter only service-related items
  const serviceItems = navItems.filter(item => 
    item.to.includes('services') || 
    item.to.includes('home-visit') ||
    item.to.includes('phone-consultation') ||
    item.to.includes('physical-therapy') ||
    item.to.includes('home-nursing') ||
    item.to.includes('elderly-care') ||
    item.to.includes('home-radiology')
  );

  return (
    <div className="min-h-screen bg-[#003366]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-12">خدماتنا</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((service) => (
              <ServiceCard
                key={service.to}
                title={service.title}
                icon={service.icon}
                to={service.to}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;