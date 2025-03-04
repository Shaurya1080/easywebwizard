
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

// Template card data
const templates = [
  {
    id: 1,
    name: "Portfolio",
    description: "Perfect for showcasing your work and personal brand.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=Portfolio",
    category: "Personal",
  },
  {
    id: 2,
    name: "Business",
    description: "Professional layout for companies and services.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=Business",
    category: "Business",
  },
  {
    id: 3,
    name: "E-commerce",
    description: "Sell products online with this shop template.",
    imageSrc: "https://placehold.co/400x300/3b82f6/FFFFFF/png?text=E-commerce",
    category: "E-commerce",
  },
];

export function Templates() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <FadeIn>
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Templates
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start with a professionally designed template
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose from our collection of professionally designed templates for various industries and customize them to fit your needs.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template, index) => (
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
                    <Button size="sm" variant="default">
                      Use this template
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={400} className="mt-16 text-center">
          <Link to="/templates">
            <Button variant="outline" className="rounded-full px-8">
              View all templates
            </Button>
          </Link>
        </FadeIn>
      </Container>
    </div>
  );
}
