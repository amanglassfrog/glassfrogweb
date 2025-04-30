"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-24 px-4 bg-gray-50 ">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              AI Solutions Made for Your Success
            </h2>
            <p className="text-muted-foreground mb-6">
              Unlock powerful and adaptable AI designed precisely for your
              business. Our platform integrates effortlessly, crafting
              personalized customer experiences and optimizing your operations.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600 mr-3">
                  ✓
                </span>
                <span>
                  Develop unique conversation paths reflecting your specific
                  business processes.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600 mr-3">
                  ✓
                </span>
                <span>
                  Guide customers effectively with AI that understands your
                  logic.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600  mr-3">
                  ✓
                </span>
                <span>
                  Gain deep insights with advanced analytics to track
                  performance and ROI.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600  mr-3">
                  ✓
                </span>
                <span>
                  Measure the tangible impact of your AI implementation.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600  mr-3">
                  ✓
                </span>
                <span>
                  Integrate smoothly with your existing CRM and essential
                  business tools.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600  mr-3">
                  ✓
                </span>
                <span>
                  Leverage your current infrastructure with intelligent AI
                  enhancement.
                </span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/chat.webp"
                alt="Business team discussing AI solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Humanize the experience
                  </h3>
                  <p className="text-white/80 text-sm">
                    With multiple artificial intelligence technologies, you can
                    enable a more human-like experience for your customers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
