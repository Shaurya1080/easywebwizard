
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/animations/FadeIn";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    "All Topics",
    "Cloud Computing",
    "Cybersecurity",
    "Software Development",
    "IT Strategy",
    "Artificial Intelligence",
    "Data Analytics"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All Topics");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch",
      excerpt: "Explore the emerging trends in cloud computing that are shaping the future of IT infrastructure and business operations.",
      date: "May 15, 2023",
      author: "John Smith",
      category: "Cloud Computing",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Work",
      excerpt: "Learn how to protect your business data and systems as employees continue to work from home and hybrid environments.",
      date: "April 28, 2023",
      author: "Lisa Chen",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "How AI is Transforming IT Service Management",
      excerpt: "Discover how artificial intelligence is revolutionizing IT service management and improving efficiency for businesses.",
      date: "April 10, 2023",
      author: "Mark Johnson",
      category: "Artificial Intelligence",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Role of DevOps in Modern Software Development",
      excerpt: "Understand how DevOps practices are streamlining software development and delivery for faster time-to-market.",
      date: "March 22, 2023",
      author: "Sarah Williams",
      category: "Software Development",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Data Analytics: Turning Information into Business Insights",
      excerpt: "Learn how data analytics can help your business make better decisions and gain a competitive advantage in your industry.",
      date: "March 15, 2023",
      author: "David Chen",
      category: "Data Analytics",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Creating an Effective IT Strategy for Business Growth",
      excerpt: "Discover the key components of a successful IT strategy that aligns with your business objectives and drives growth.",
      date: "February 28, 2023",
      author: "Jennifer Lee",
      category: "IT Strategy",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                Expert insights, industry trends, and practical advice on IT solutions and digital transformation.
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Search and Filter Section */}
        <div className="py-8 bg-gray-50">
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
                        : "bg-white text-gray-600 hover:bg-gray-100"
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
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
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
                <h2 className="text-3xl font-bold text-gray-900">Subscribe to Our Newsletter</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Stay updated with the latest insights and trends in IT. We'll send you our best articles directly to your inbox.
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
