import { HomeIcon, PhoneIcon, ClipboardListIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Services from "./pages/Services.jsx";
import BookingForm from "./pages/BookingForm.jsx";

export const navItems = [
  {
    title: "الرئيسية",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "خدماتنا",
    to: "/services",
    icon: <ClipboardListIcon className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "احجز الآن",
    to: "/book",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <BookingForm />,
  },
];