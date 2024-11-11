import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#003366]">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-12">اتصل بنا</h1>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">معلومات التواصل</h2>
                <p className="text-gray-600">
                  يمكنك التواصل معنا عبر:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">الهاتف:</span>
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      +123 456 7890
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">البريد الإلكتروني:</span>
                    <a href="mailto:info@example.com" className="text-primary hover:underline">
                      info@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;