
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

// Template categories
const categories = [
  "All",
  "Business",
  "Portfolio",
  "E-commerce",
  "Blog",
  "Landing Page",
  "Personal",
];

// Template data
const templates = [
  {
    id: 1,
    name: "Portfolio Standard",
    description: "Perfect for showcasing your work and personal brand.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=Portfolio",
    category: "Portfolio",
  },
  {
    id: 2,
    name: "Business Pro",
    description: "Professional layout for companies and services.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=Business",
    category: "Business",
  },
  {
    id: 3,
    name: "E-commerce Shop",
    description: "Sell products online with this shop template.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=E-commerce",
    category: "E-commerce",
  },
  {
    id: 4,
    name: "Blog Standard",
    description: "Share your stories with this clean blog layout.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=Blog",
    category: "Blog",
  },
  {
    id: 5,
    name: "Landing Page Premium",
    description: "Convert visitors with this optimized landing page.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=Landing+Page",
    category: "Landing Page",
  },
  {
    id: 6,
    name: "Personal Site",
    description: "A clean layout for your personal website or resume.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=Personal",
    category: "Personal",
  },
];

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter templates based on active category and search query
  const filteredTemplates = templates.filter(
    (template) =>
      (activeCategory === "All" || template.category === activeCategory) &&
      template.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-24">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <FadeIn>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Website Templates
                </h1>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="mt-4 text-lg text-gray-600">
                  Choose from our collection of professionally designed templates and customize them to fit your needs.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={200} className="mt-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                        activeCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search templates..."
                    className="pl-8 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="glass group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className="aspect-h-3 aspect-w-4 overflow-hidden bg-gray-200">
                      <img
                        src={template.imageSrc}
                        alt={template.name}
                        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {template.name}
                        </h3>
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                          {template.category}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {template.description}
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <Link to="/builder">
                          <Button size="sm" variant="default">
                            Use this template
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {filteredTemplates.length === 0 && (
              <div className="mt-16 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  No templates found
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Templates;
