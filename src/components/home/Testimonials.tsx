
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The web development team at Pixel Sync created an amazing website that perfectly represents our brand. The site is not only beautiful but also drives real results for our business.",
    author: "Sarah Johnson",
    title: "CEO, GreenTech Innovations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 2,
    quote: "Their mobile app development skills are exceptional. They delivered a cross-platform app that our customers love, with intuitive design and flawless functionality.",
    author: "Michael Chen",
    title: "Product Manager, Financial Solutions Inc.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 3,
    quote: "The game they developed for our educational platform has been a massive hit with students. Engaging, fun, and educational - exactly what we needed.",
    author: "Emily Rodriguez",
    title: "Education Director, Learning Innovations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 4,
    quote: "Their social media management transformed our online presence. Engagement is up, followers have doubled, and we're seeing real conversion from social channels.",
    author: "David Thompson",
    title: "Marketing Director, Retail Giants",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 5,
    quote: "The ad designs created by Pixel Sync are stunning and effective. Our campaign conversion rates have never been higher.",
    author: "Jennifer Lee",
    title: "Advertising Manager, Consumer Goods Co.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 6,
    quote: "Their digital marketing strategy completely transformed our online performance. SEO rankings improved dramatically and our lead generation has never been better.",
    author: "Robert Wilson",
    title: "Growth Director, SaaS Enterprise",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    id: 7,
    quote: "The branding work Pixel Sync did for our company was transformative. They captured our essence perfectly and created a cohesive identity that resonates with our audience.",
    author: "Amanda Parker",
    title: "Brand Manager, New Ventures Inc.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
  }
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
