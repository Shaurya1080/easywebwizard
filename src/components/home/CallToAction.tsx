
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function CallToAction() {
  return (
    <div className="py-24">
      <Container>
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ready to build your website?
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-50">
                Start building your website today with our intuitive drag-and-drop builder. No coding required.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/login?signup=true">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full px-8 py-6 text-base font-medium text-blue-600"
                  >
                    Get started
                  </Button>
                </Link>
                <Link
                  to="/templates"
                  className="text-base font-semibold leading-6 text-white hover:text-blue-50 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-20"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="gradient">
                <stop offset="0" stopColor="white" />
                <stop offset="1" stopColor="white" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </div>
  );
}
