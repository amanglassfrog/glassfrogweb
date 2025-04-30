// src/app/bloglist/page.js
import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import Testimonial from "@/components/Testimonial/Testimonial"
import { Features } from '../../components/Feature/Features';
import { Solutions } from '../../components/Solutions/Solutions';

import Hero from '../../components/Hero/Hero';




const Chatbot = () => {
    return (
        <>
            <head>
        <title>Best AI Chat Bot Software from Leading AI Chat Bot Company</title>
<meta name="description" content="Top AI chat bot company offering the best AI chat bot software for 24/7 support, automation, and engagement. Easy to integrate. Try it free today!"/>
      </head>
            <Header />
            <Hero />
            
            <Features />
            <Solutions />
            {/* <Templates />
            <Testimonials/>
            <CTA/> */}
            
        {/* 
        <Solutions />
        <Templates />
        <Testimonials />
        <Partners />
        <CTA /> */}
      
            <Footer />
        </>
    );
};

export default Chatbot;
