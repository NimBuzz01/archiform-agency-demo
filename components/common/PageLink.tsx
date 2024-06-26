import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const underline = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
  },
};

export default function PageLink({
  text,
  href,
  className,
  arrowSize,
  disableArrow,
  underlineColor = "bg-cmprimary",
}: {
  text: string;
  href: string;
  className?: string;
  arrowSize?: string;
  disableArrow?: boolean;
  underlineColor?: string;
}) {
  const [hovered, setHovered] = useState(false);

  const letterVariants = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: { duration: 1 },
    },
  };

  return (
    <motion.div
      variants={letterVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-50px", once: true }}
      className={cn("relative inline-flex group cursor-pointer", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center">
        <Link href={href}>{text}</Link>
        {!disableArrow && (
          <ArrowRight
            className={cn(
              "group-hover:translate-x-1 transition-all w-6 h-4",
              arrowSize
            )}
          />
        )}
      </div>
      <motion.div
        className={cn("absolute bottom-0 left-0 h-0.5", underlineColor)}
        variants={underline}
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
      />
    </motion.div>
  );
}
