import { motion } from "framer-motion";

export const SkeletonCardNotices = () => {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 3 }} className="flex max-w-1444 gap-10 slg:flex-col-reverse slg:items-center ">
      <div className="bg-gray-300 w-450 h-60 rounded-xl slg:w-full"></div>
      <div className="w-2/3 flex flex-col gap-3 slg:w-full">
        <div className="bg-gray-300 w-1/5 h-5 rounded-md mb-1"></div>
        <div className="bg-gray-300 h-8 rounded-md"></div>
        <div className="bg-gray-300 h-8 rounded-md"></div>
        <div className="bg-gray-300 h-6 rounded-md mt-2"></div>
        <div className="bg-gray-300 h-6 rounded-md"></div>
        <div className="bg-gray-300 h-6 rounded-md hidden md:block"></div>
        <div className="bg-gray-300 h-6 rounded-md hidden md:block"></div>
        <div className="bg-gray-300 h-6 rounded-md hidden md:block"></div>
        <div className="bg-gray-300 h-6 rounded-md hidden md:block"></div>
        <div className="bg-gray-300 w-1/6 h-5 rounded-md"></div>
      </div>
    </motion.section>
  );
};
