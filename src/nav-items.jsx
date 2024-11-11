import { Home, Phone, ClipboardList, Activity, Heart, FlaskConical, FileText, Users, MessageCircle, Stethoscope } from "lucide-react";
import Index from "./pages/Index.jsx";
import Services from "./pages/Services.jsx";
import BookingForm from "./pages/BookingForm.jsx";

export const navItems = [
  {
    title: "الصفحة الرئيسية",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "من نحن",
    to: "/about",
    icon: <Users className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "خدمات زيارة طبيب",
    to: "/services",
    icon: <ClipboardList className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "زيارة طبيب للمنزل",
    to: "/home-visit",
    icon: <Stethoscope className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "استشارات طبية هاتفية",
    to: "/phone-consultation",
    icon: <Phone className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "العلاج الطبيعي المنزلي",
    to: "/physical-therapy",
    icon: <Activity className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "التمريض المنزلي",
    to: "/home-nursing",
    icon: <Heart className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "رعاية المسنين بالمنزل",
    to: "/elderly-care",
    icon: <Users className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "عمل الأشعة في المنزل",
    to: "/home-radiology",
    icon: <FlaskConical className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "المقالات",
    to: "/articles",
    icon: <FileText className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "احجز زيارة طبيب",
    to: "/contact",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <BookingForm />,
  },
];
