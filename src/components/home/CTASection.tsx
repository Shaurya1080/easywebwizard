
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTASection() {
  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-gray-900 to-black px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your digital presence?
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Contact us today for a free consultation and discover how our solutions can drive your business forward.
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
                    <p className="mt-2 text-gray-300">shauryasd123@gmail.com</p>
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
