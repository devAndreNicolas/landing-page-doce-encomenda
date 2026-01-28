import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, className, delay = 0 }: FeatureCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" }}
      className={cn(
        "group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300",
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
