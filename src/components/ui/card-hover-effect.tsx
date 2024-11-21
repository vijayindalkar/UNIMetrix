"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-3xl backdrop-blur-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.4 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.div
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[300px] w-full md:h-[200px] overflow-hidden bg-white shadow-lg border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 group-hover:shadow-2xl transition-all duration-300 relative",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-center font-bold text-xl tracking-widest mt-4 mb-2",
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "bg-clip-text text-transparent",
        "drop-shadow-md dark:drop-shadow-lg transition duration-300 ease-in-out hover:scale-105",
        className
      )}
    >
      {children}
    </h4>
  );
};



// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <motion.h4
//       initial={{ y: 10, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className={cn(
//         "text-black dark:text-zinc-300 text-xl font-bold text-center tracking-wide mt-4 transition-colors duration-300",
//         className
//       )}
//     >
//       {children}
//     </motion.h4>
//   );
// };

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.p
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className={cn(
        "mt-4 text-black dark:text-zinc-400 text-center tracking-wide leading-relaxed text-sm transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.p>
  );
};
