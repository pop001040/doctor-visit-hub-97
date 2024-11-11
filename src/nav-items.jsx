import { Home, Info, Phone } from "lucide-react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";

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