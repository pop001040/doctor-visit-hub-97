import { Home, Info, Phone } from "lucide-react";

export const navItems = [
  {
    title: "الرئيسية",
    to: "/",
    icon: <Home className="w-5 h-5" />,
    page: <Index />,
  },
  {
    title: "من نحن",
    to: "/about",
    icon: <Info className="w-5 h-5" />,
    page: <About />,
  },
  {
    title: "اتصل بنا",
    to: "/contact",
    icon: <Phone className="w-5 h-5" />,
    page: <Contact />,
  },
];