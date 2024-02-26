import { motion } from "framer-motion";

export const SkeletonCardMostPopular = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 3 }}>
      <div className="w-52 h-60 bg-gray-300 dark:bg-zinc-900 shadow-xl rounded-lg"></div>
    </motion.div>
  );
};
