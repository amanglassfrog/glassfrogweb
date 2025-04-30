"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle, Bot, Check } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setSuccess(true);
        setEmail(""); // Reset the email input
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const bubbleVariants = {
    initial: (i) => ({
      opacity: 0,
      scale: 0.8,
      y: 10,
    }),
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  const floatingIcons = [
    {
      icon: <Instagram className="h-6 w-6 text-white" />,
      top: "20%",
      left: "15%",
      delay: 0,
    },
    {
      icon: <Facebook className="h-6 w-6 text-white" />,
      top: "70%",
      left: "20%",
      delay: 0.2,
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      top: "30%",
      right: "15%",
      delay: 0.1,
    },
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      top: "65%",
      right: "22%",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative flex justify-center items-center w-full h-screen bg-[#020617] text-white pb-20 overflow-hidden">
      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={bubbleVariants}
          initial="initial"
          animate="animate"
          className="absolute z-10 p-2 bg-blue-600/30 backdrop-blur-sm rounded-full"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="container px-4 pt-24 pb-12 md:pt-32 md:pb-16 relative z-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            AI Chatbot Service
            <br></br>
            <span className="text-blue-300">
              Talk, Ask, and Get Help Anytime
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            It's a smart program that understands your messages, answers
            questions, or helps you do tasks online.
            <br></br>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} id="contact-form" method="POST">
              <div className="flex justify-center items-center gap-2 w-full">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-200/70 px-4 py-2 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black font-medium py-2 px-6 rounded-lg"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
              {error && <div className="text-red-500">{error}</div>}
              {success && (
                <div className="text-green-500">
                  Submission successful, We will contact you shortly!
                </div>
              )}
            </form>
          </motion.div>

          {/* <motion.div
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-200"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-400" />
              Free 14-day trial
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-400" />
              No credit card required
            </div>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L48 8.875C96 17.9167 192 35.5833 288 53.25C384 71.0833 480 88.9167 576 80.5C672 71.0833 768 35.5833 864 26.75C960 17.9167 1056 35.5833 1152 44.5C1248 53.25 1344 53.25 1392 53.25L1440 53.25V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="white"
            className="dark:fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
