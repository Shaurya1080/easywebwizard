
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Gamepad, Share2, Palette } from "lucide-react";

const services = [
  {
    name: "Web Development",
    description: "Custom, responsive, and SEO-friendly websites tailored to your business needs.",
    icon: Globe,
    link: "/services#web",
  },
  {
    name: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    link: "/services#app",
  },
  {
    name: "Game Development",
    description: "Engaging and interactive games for mobile, desktop, and web platforms.",
    icon: Gamepad,
    link: "/services#game",
  },
  {
    name: "Social Media Management",
    description: "Strategic content creation and management for all social media platforms.",
    icon: Share2,
    link: "/services#social",
  },
  {
    name: "Ads Designing",
    description: "Eye-catching and conversion-focused designs for digital and print advertising.",
    icon: Palette,
    link: "/services#ads",
  },
];

export function Services() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <FadeIn>
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Our Services
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Digital Solutions
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a focused range of digital services to help your business thrive in the modern marketplace.
            </p>
          </FadeIn>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.name} delay={300 + index * 100}>
                <Link to={service.link} className="group relative block h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex h-full flex-col">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-gray-600 flex-grow">{service.description}</p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
