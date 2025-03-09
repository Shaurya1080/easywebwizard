
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/animations/FadeIn";
import { Search, Calendar, User, ArrowRight, TrendingUp, Eye } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    "All Topics",
    "AI & Machine Learning",
    "Web3 & Blockchain",
    "UX/UI Design",
    "Mobile Development",
    "Digital Marketing",
    "Tech Trends"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All Topics");

  const blogPosts = [
    {
      id: 1,
      title: "How GPT-4 is Revolutionizing Content Creation for Businesses",
      excerpt: "Discover how AI-powered tools like GPT-4 are transforming content strategies and enabling businesses to scale their content production with unprecedented efficiency.",
      date: "June 12, 2023",
      author: "Priya Sharma",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      views: "24.5K",
      trending: true,
      image: "https://images.unsplash.com/photo-1677442135136-760c813029fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Web3 Applications That Are Changing How We Think About Digital Ownership",
      excerpt: "Explore the innovative Web3 applications that are redefining digital ownership, from NFTs in gaming to decentralized social media platforms.",
      date: "May 28, 2023",
      author: "Arjun Patel",
      category: "Web3 & Blockchain",
      readTime: "10 min read",
      views: "18.7K",
      trending: true,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Minimalist UX Design: Why Less Continues to Be More in 2023",
      excerpt: "Learn why minimalist UX design principles are still dominating the digital landscape and how implementing them can significantly improve user engagement.",
      date: "May 15, 2023",
      author: "Neha Gupta",
      category: "UX/UI Design",
      readTime: "7 min read",
      views: "15.2K",
      trending: false,
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Rise of Super Apps: What Businesses Can Learn from Asian Tech Giants",
      excerpt: "Analyze the success of super apps in Asia and understand how Western businesses can apply these principles to create more integrated digital experiences.",
      date: "April 30, 2023",
      author: "Rajiv Mehta",
      category: "Tech Trends",
      readTime: "9 min read",
      views: "21.8K",
      trending: true,
      image: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Cross-Platform Development in 2023: Flutter vs React Native",
      excerpt: "A comprehensive comparison of Flutter and React Native in 2023, helping developers and businesses choose the right framework for their mobile app development needs.",
      date: "April 22, 2023",
      author: "Kiran Shah",
      category: "Mobile Development",
      readTime: "11 min read",
      views: "19.5K",
      trending: false,
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Content Atomization: How to Maximize Your Digital Marketing ROI",
      excerpt: "Discover the strategy of content atomization and how breaking down complex content into smaller pieces can dramatically extend your reach and engagement.",
      date: "April 10, 2023",
      author: "Ananya Das",
      category: "Digital Marketing",
      readTime: "8 min read",
      views: "16.3K",
      trending: false,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5f01a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "How Augmented Reality is Transforming E-commerce Experiences",
      excerpt: "Explore the innovative ways augmented reality is enhancing online shopping experiences, reducing return rates, and increasing conversion for e-commerce businesses.",
      date: "March 28, 2023",
      author: "Vikram Choudhury",
      category: "Tech Trends",
      readTime: "9 min read",
      views: "22.1K",
      trending: true,
      image: "https://images.unsplash.com/photo-1633422480514-15f6df57edee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "The Ethics of AI: Navigating Responsible Innovation in Technology",
      excerpt: "A deep dive into the ethical considerations of implementing AI in business solutions and how companies can ensure they're developing AI responsibly.",
      date: "March 15, 2023",
      author: "Shreya Kapoor",
      category: "AI & Machine Learning",
      readTime: "12 min read",
      views: "20.7K",
      trending: false,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Filter blog posts based on search query and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All Topics" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
          <Container>
            <FadeIn>
              <h1 className="text-4xl font-bold sm:text-5xl">Our Blog</h1>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl">
                Expert insights, industry trends, and cutting-edge thoughts on technology, design, and digital transformation.
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Trending Section */}
        <div className="py-10 bg-gray-50">
          <Container>
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts
                .filter(post => post.trending)
                .slice(0, 4)
                .map((post, index) => (
                  <FadeIn key={post.id} delay={index * 100}>
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="h-40 overflow-hidden relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 m-2 rounded-full flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </div>
                      </div>
                      <div className="p-4 flex-grow flex flex-col">
                        <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-2">
                          {post.category}
                        </span>
                        <h3 className="font-bold text-gray-900 line-clamp-2 mb-1">{post.title}</h3>
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <Eye className="h-3 w-3 mr-1" />
                          <span>{post.views} views</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <a 
                          href="#" 
                          className="mt-auto inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                        >
                          Read more <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </FadeIn>
                ))}
            </div>
          </Container>
        </div>

        {/* Search and Filter Section */}
        <div className="py-8 bg-white">
          <Container>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative md:w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      activeCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Blog Posts */}
        <div className="py-16">
          <Container>
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <FadeIn key={post.id} delay={index * 100}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {post.trending && (
                          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 m-2 rounded-full flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex-grow">
                          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
                            {post.category}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="mt-1 flex items-center text-sm text-gray-500">
                            <Eye className="h-4 w-4 mr-1" />
                            <span>{post.views} views</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <p className="mt-4 text-gray-600">{post.excerpt}</p>
                        </div>
                        <div className="mt-6">
                          <a 
                            href="#" 
                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                          >
                            Read more <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <FadeIn>
                  <h3 className="text-xl font-medium text-gray-900">No articles found</h3>
                  <p className="mt-2 text-gray-600">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All Topics");
                    }}
                  >
                    Reset filters
                  </Button>
                </FadeIn>
              </div>
            )}
          </Container>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-50 py-16">
          <Container>
            <FadeIn>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">Stay Updated with Tech Trends</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Subscribe to our newsletter and get the latest insights, trends, and resources delivered directly to your inbox.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow"
                  />
                  <Button>Subscribe</Button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </FadeIn>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
