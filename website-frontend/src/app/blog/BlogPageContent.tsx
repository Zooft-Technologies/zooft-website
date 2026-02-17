"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { blogPosts } from "@/data/content";
import ImageWithFallback from "@/components/ImageWithFallback";

export default function BlogPageContent() {
  const categories = [
    "all",
    "technology",
    "business",
    "innovation",
    "cybersecurity",
  ];
  const [selectedCategory, setSelectedCategory] =
    React.useState<string>("all");

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-zooft-primary to-zooft-dark text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-zooft-light">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Insights, trends, and best practices in technology and business
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-zooft-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden relative">
                  <ImageWithFallback
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zooft-primary font-medium bg-zooft-light px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime} min read
                    </span>
                  </div>
                  <CardTitle className="text-xl text-zooft-primary line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">By {post.author}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(post.publishDate).toLocaleDateString()}
                      </p>
                    </div>
                    <button className="text-zooft-primary hover:text-zooft-dark font-medium">
                      Read More →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-zooft-primary">Topics</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Popular topics our readers love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { topic: "Digital Transformation", posts: 15, description: "How businesses can leverage technology for growth", icon: "🚀" },
              { topic: "Cybersecurity", posts: 12, description: "Protecting your business from digital threats", icon: "🔒" },
              { topic: "Cloud Computing", posts: 18, description: "Scalable solutions for modern businesses", icon: "☁️" },
              { topic: "Software Development", posts: 25, description: "Best practices and emerging technologies", icon: "💻" },
            ].map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-zooft-light mx-auto mb-4 flex items-center justify-center text-3xl">
                    {topic.icon}
                  </div>
                  <CardTitle className="text-xl text-zooft-primary">
                    {topic.topic}
                  </CardTitle>
                  <div className="text-2xl font-bold text-zooft-secondary">
                    {topic.posts} posts
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-zooft-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and technology
            trends.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-zooft-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
