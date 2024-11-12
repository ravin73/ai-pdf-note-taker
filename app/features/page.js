// features/page.js
"use client"
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Features() {
  return (
    <div>
      <Navbar/>
    <div className="relative min-h-screen bg-gradient-to-r from-violet-300 via-orange-100 to-violet-300 p-6 sm:p-8 lg:p-12">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">AI PDF Note Taker Features</h1>

        {/* Feature Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Choose Our AI PDF Note Taker?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience seamless studying, research, and document interaction. Our AI-powered PDF note taker allows you 
            to upload PDFs, ask questions, and receive real-time answers—all in one place.
          </p>
        </section>

        {/* Free Tier Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Free Tier: 5 PDF Uploads</h2>
          <p className="text-gray-600 leading-relaxed">
            Get started with 5 free PDF uploads. It’s the perfect way to explore our features and experience the convenience 
            of asking questions directly within your PDFs.
          </p>
        </section>

        {/* Subscription Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Unlimited Access for $9.99/Month</h2>
          <p className="text-gray-600 leading-relaxed">
            Unlock unlimited PDF uploads for just $9.99 per month. Maximize your productivity by accessing all your PDFs 
            and asking questions anytime, anywhere.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10">
          <Link href="/sign-up">
            <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300">
              Get Started
            </button>
          </Link>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
