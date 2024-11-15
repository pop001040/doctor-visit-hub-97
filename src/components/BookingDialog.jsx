import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

const BookingDialog = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const message = `الاسم: ${formData.name}%0aالهاتف: ${formData.phone}%0aالبريد: ${formData.email}%0aالحالة: ${formData.condition}`;
    window.open(`https://wa.me/01113939319?text=${message}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-4">احجز زيارة طبيب</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-right">
              الاسم
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-right"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-right">
              رقم الهاتف
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="text-right"
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-right">
              البريد الإلكتروني (اختياري)
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="text-right"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="condition" className="text-right">
              معلومات عن الحالة المرضية (اختياري)
            </label>
            <Textarea
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="text-right"
              rows={4}
            />
          </div>
          <Button
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 mt-4"
          >
            <MessageCircle className="w-5 h-5" />
            احجز الآن
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;