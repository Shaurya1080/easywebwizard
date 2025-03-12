
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  return (
    <div className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/80" />
        <img 
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Technology background" 
          className="h-full w-full object-cover"
        />
      </div>

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl text-center md:text-left">
          <FadeIn>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Innovative IT Solutions
              <span className="block text-purple-400">For Modern Businesses</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl max-w-2xl">
              We deliver cutting-edge technology services and solutions that help businesses transform, scale, and stay competitive in today's digital landscape.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <Button size="lg" className="rounded-md text-base bg-purple-600 hover:bg-purple-700">
                  Get Started with IT Services
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" className="rounded-md text-base bg-purple-600 hover:bg-purple-700">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
