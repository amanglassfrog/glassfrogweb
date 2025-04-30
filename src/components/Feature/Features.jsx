"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, DollarSign, HeadphonesIcon, Check } from "lucide-react";

export function Features() {
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

  const features = [
    {
      img: "/c1.jpg",
      title: "Boost Engagement & Efficiency",
      description:
        "Supercharge your digital marketing efforts with AI-powered conversations that connect with your audience.",
      color: "bg-purple-500",
      checks: [
        "Provide instant answers to visitor queries, 24/7.",
        "Reduce response times and improve customer satisfaction.",
      ],
    },
    {
      img: "/c2.avif",
      title: "Drive Sales & Conversions",
      description:
        "Convert more prospects into loyal customers with intelligent AI chatbots that understand customer needs.",
      color: "bg-amber-500",
      checks: [
        "Guide visitors through the sales funnel with personalized recommendations.",
        "Capture leads and answer pre-sales questions immediately.",
      ],
    },
    {
      img: "/c3.avif",
      title: "Gain Valuable Insights & Data",
      description:
        "Deliver exceptional customer support around the clock without expanding your team.",
      color: "bg-rose-400",
      checks: [
        "Collect visitor data on common questions and pain points.",
        "Understand customer behavior to optimize your website and offerings.",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        {/* <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simply it helps to engage with customers
            <br />& grow busieness so fastly
          </h2>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8  text-center">
            Difference B/W Simple Chatbots and AI Chatbots
          </h2>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="w-1/2 px-4 py-2 text-lg border border-gray-300 bg-gray-100 text-center">
                  Simple Chatbots
                </th>
                <th className="w-1/2 px-4 py-2 text-lg border border-gray-300 bg-gray-100 text-center">
                  Conversational AI Chatbots
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-1/2 px-4 py-2 border border-gray-300 text-lg text-center">
                  They have answers for specific questions. If you ask something
                  they don't know, they will likely get confused.
                </td>
                <td className="w-1/2 px-4 py-2 border border-gray-300 text-lg text-center">
                  Like a smart person. They understand what you mean, even if
                  you don’t use exact keywords. They can learn from
                  conversations and handle more complex questions more
                  naturally.
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 pt-5"
        >
          <ul className="space-y-3 mb-8 ">
            <li className="flex items-start">
              <span className="inline-flex  items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600 mr-3">
                ✓
              </span>
              <span className="text-2xl">
                Its like talking to a helpful assistant on your phone or
                computer.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600 mr-3">
                ✓
              </span>
              <span className="text-2xl">
                It can answer questions, give information, or solve problems.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600  mr-3">
                ✓
              </span>
              <span className="text-2xl">
                It works in places like websites, apps.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600  mr-3">
                ✓
              </span>
              <span className="text-2xl">
                It tries to make the conversation easy and friendly, not
                robotic.{" "}
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100  text-blue-600  mr-3">
                ✓
              </span>
              <span className="text-2xl">
                {" "}
                It's always available to help you, day or night, whenever you
                need it.
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl p-6 border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>

              <div className="space-y-3 mt-6">
                {feature.checks.map((text, i) => (
                  <div key={i} className="flex items-start">
                    <div
                      className={`p-1 rounded-full mr-3 mt-0.5 ${feature.color}`}
                    >
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
