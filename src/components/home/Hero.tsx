
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-white" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center pt-16 lg:pt-20">
          <FadeIn>
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20 bg-blue-50">
              New Release
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Build websites without code
              <span className="block text-blue-600">in minutes</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">
              Create beautiful, responsive websites with our intuitive drag-and-drop builder. Choose from templates, customize to your needs, and publish with one click.
            </p>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/login?signup=true">
                <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium">
                  Get started
                </Button>
              </Link>
              <Link to="/templates" className="text-base font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                Explore templates <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400} className="mt-16 sm:mt-20">
          <div className="glass rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-6 py-3 flex items-center space-x-2">
              <div className="flex items-center space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="overflow-hidden relative">
              <div className="animate-float">
                <img
                  src="https://placehold.co/1200x800/3b82f6/FFFFFF/png?text=Website+Builder+Interface"
                  alt="Website builder interface"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
