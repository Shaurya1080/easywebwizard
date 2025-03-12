
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { TrendingUp, ArrowRight } from "lucide-react";

export function CTASection() {
  const trendingBlogs = [
    {
      id: 1,
      title: "How GPT-4 is Revolutionizing Content Creation",
      category: "AI & Machine Learning",
      views: "24.5K",
      readTime: "8 min read",
      link: "/blog"
    },
    {
      id: 2,
      title: "Web3 Applications Changing Digital Ownership",
      category: "Web3 & Blockchain",
      views: "18.7K",
      readTime: "10 min read",
      link: "/blog"
    },
    {
      id: 3,
      title: "The Rise of Super Apps: Lessons from Asian Tech",
      category: "Tech Trends",
      views: "21.8K",
      readTime: "9 min read",
      link: "/blog"
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingBlogs.map((blog, index) => (
              <FadeIn key={blog.id} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col p-6">
                  <div className="flex-grow">
                    <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
                      {blog.category}
                    </span>
                    <h3 className="font-bold text-gray-900 line-clamp-2 mb-2">{blog.title}</h3>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <span>{blog.views} views</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={blog.link}
                    className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                  >
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative isolate overflow-hidden bg-gradient-to-r from-gray-900 to-black px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your digital presence?
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Contact us today for our IT services and solutions and discover how we can drive your business forward.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link
                  to="/services"
                  className="text-base font-semibold leading-6 text-white hover:text-purple-400 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="relative mt-16 h-80 lg:mt-0">
            <FadeIn delay={300}>
              <div className="absolute left-0 top-0 w-full h-full bg-purple-900/20 rounded-xl backdrop-blur-sm border border-purple-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-lg font-semibold">Get in Touch</p>
                    <p className="mt-2 text-gray-300">inquiries@pixelsync.in</p>
                    <p className="mt-1 text-gray-300">+91 6394944272</p>
                    <p className="mt-1 text-gray-300">Sancoale, Goa</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  );
}
