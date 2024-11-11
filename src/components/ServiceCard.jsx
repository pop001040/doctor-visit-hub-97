import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center h-full"
    >
      <div className="w-16 h-16 bg-[#E6FFFD] rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm flex-grow">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;