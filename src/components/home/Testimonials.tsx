
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "TechPro's cloud migration services transformed our operations. We experienced zero downtime during the transition and have seen a 40% reduction in IT costs.",
    author: "Sarah Johnson",
    title: "CTO, GreenTech Innovations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 2,
    quote: "The cybersecurity solutions provided by TechPro have given us peace of mind. Their proactive approach has prevented several potential breaches.",
    author: "Michael Chen",
    title: "IT Director, Financial Solutions Inc.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 3,
    quote: "Working with TechPro on our custom software development project was a game-changer. They delivered on time and exceeded our expectations.",
    author: "Emily Rodriguez",
    title: "COO, Retail Innovations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="py-24 sm:py-32 bg-gray-900 text-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 relative">
          <FadeIn delay={200}>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="mx-auto max-w-2xl text-center">
                      <div className="mx-auto h-20 w-20 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-8 text-xl leading-8 text-gray-300">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-6">
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute left-0 right-0 top-1/2 -mt-8 flex justify-between">
              <button
                type="button"
                className="group rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20 transition-colors"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6 text-white" />
                <span className="sr-only">Previous testimonial</span>
              </button>
              <button
                type="button"
                className="group rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20 transition-colors"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6 text-white" />
                <span className="sr-only">Next testimonial</span>
              </button>
            </div>

            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentIndex(index);
                  }}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
