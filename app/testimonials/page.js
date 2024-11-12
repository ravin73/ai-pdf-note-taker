// testimonials/page.js
"use client"
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';


const testimonialsData = [
  {
    name: "Sarah Thompson",
    role: "Graduate Student",
    feedback:
      "The AI PDF Note Taker has been a game-changer for my research. It’s so easy to upload my documents, and the AI answers my questions instantly! The 5 free uploads helped me get started, and I immediately knew the subscription was worth it.",
    image: '/profile2.webp',
  },
  {
    name: "Mark Jansen",
    role: "Business Analyst",
    feedback:
      "This tool is brilliant for my workflow. I analyze a lot of reports, and asking questions directly in the PDFs is a massive time-saver. The accuracy and ease of use make it my go-to tool for document research.",
    image: '/profile1.webp',
  },
  {
    name: "Emily Chen",
    role: "Freelance Writer",
    feedback:
      "As a writer, I review tons of articles and documents daily. With the AI PDF Note Taker, I can quickly find answers without searching through pages manually. Definitely worth every penny!",
    image: '/profile3.webp',
  },
];

export default function Testimonials() {
  return (
    <div>
        <Navbar />

      <h1 className="text-center text-3xl font-bold text-blue-800 mt-12">Testimonials</h1>
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-10 lg:p-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">What Our Users Are Saying</h1>
        <p className="text-lg text-gray-600">
          Hear from some of the users who are already saving time and enhancing their workflows with our AI PDF Note Taker.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 gap-y-5 max-w-6xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <Image
              src={testimonial.image} 
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-700">{testimonial.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-gray-700">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}
