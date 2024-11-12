"use client"
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
    return (
        <div>
            <Navbar/>
            <div className="px-4 py-8 md:px-10 lg:px-20">
                {/* Hero Section */}
                <section className="text-center my-8">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        AI PDF Note-Taker Blog
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Discover insights, tips, and updates on how to make the most of our AI PDF Note-Taker.
                    </p>
                </section>

                {/* Featured Article */}
                <section className="my-12">
                    <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                            src={'/blog1.webp'}
                            alt="Featured Article"
                            width={500}
                            height={150}
                            className="w-full lg:w-1/2 object-cover"
                        />
                        <div className="p-6 lg:p-8 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4">Making the Most of AI Note-Taking</h2>
                            <p className="text-gray-700 mb-6">
                                Learn how our AI PDF Note-Taker can streamline your workflow and enhance productivity. This guide covers essential tips and tricks.
                            </p>
                            <Link href="/blog/featured-article" className="text-blue-600 font-semibold hover:underline">
                                Read more →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Article List */}
                <section className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <article key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image
                                src={`/Blog-images/blog-${i + 1}.webp`}
                                alt={`Article ${i + 1}`}
                                width={400}
                                height={250}
                                className="w-full object-cover h-48"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2">Article Title {i + 1}</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Discover the latest insights and updates on our PDF Note-Taker. Find out how it can help you...
                                </p>
                                <Link href={`/blog/article-${i + 1}`} className="text-blue-600 font-semibold hover:underline">
                                    Read more →
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>

                {/* Subscription Banner */}
                <section className="bg-blue-600 text-white text-center py-10 rounded-lg my-12">
                    <h2 className="text-2xl font-bold mb-4">Upgrade to Unlimited PDF Uploads</h2>
                    <p className="max-w-xl mx-auto">
                        Unlock the full potential of our AI PDF Note-Taker with a subscription and enjoy unlimited uploads and premium features.
                    </p>
                    <Link href="/dashboard/upgrade" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition">
                        Upgrade
                    </Link>
                </section>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}
