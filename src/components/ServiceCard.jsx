import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-[#E6FFFD] to-white p-8 rounded-lg text-right flex flex-col items-end h-full"
    >
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;