
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Gamepad, 
  Share2, 
  Palette,
  Briefcase,
  BarChart
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "web",
      title: "Web Development",
      description: "Build powerful, responsive, and user-friendly websites that drive results. Our web development team crafts tailored solutions from simple corporate websites to complex web applications.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "CMS Implementation",
        "Web Application Development",
        "Website Maintenance & Support"
      ],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "app",
      title: "App Development",
      description: "Create stunning mobile applications that engage users and streamline operations. We develop native and cross-platform apps for iOS and Android with focus on performance and user experience.",
      features: [
        "iOS & Android Native Apps",
        "Cross-Platform Development",
        "UI/UX Design",
        "App Testing & QA",
        "App Maintenance & Updates"
      ],
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "game",
      title: "Game Development",
      description: "Bring your game ideas to life with our professional game development services. From casual mobile games to immersive experiences, we create engaging games across multiple platforms.",
      features: [
        "2D & 3D Game Development",
        "Mobile Game Development",
        "Unity & Unreal Engine",
        "Game Design & Storytelling",
        "Multiplayer & Online Gaming"
      ],
      icon: Gamepad,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "social",
      title: "Social Media Management",
      description: "Maximize your brand's social media presence with our comprehensive management services. We help you engage with your audience, grow your following, and drive conversions through strategic content.",
      features: [
        "Content Creation & Curation",
        "Social Media Strategy",
        "Community Management",
        "Analytics & Reporting",
        "Influencer Collaboration"
      ],
      icon: Share2,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "ads",
      title: "Ads Designing",
      description: "Create compelling visual advertisements that capture attention and drive conversions. Our design team crafts stunning ad creatives for digital platforms, print media, and more.",
      features: [
        "Social Media Ad Designs",
        "Google Display Network Ads",
        "Banner & Billboard Designs",
        "Print Advertisement Design",
        "Animation & Video Ads"
      ],
      icon: Palette,
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Drive traffic, leads, and conversions with our data-driven digital marketing services. Our strategies are tailored to your business goals and target audience for maximum impact.",
      features: [
        "SEO & Content Marketing",
        "PPC Campaign Management",
        "Email Marketing",
        "Conversion Rate Optimization",
        "Marketing Analytics & Reporting"
      ],
      icon: BarChart,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "branding",
      title: "Branding & Identity",
      description: "Build a strong and recognizable brand that resonates with your target audience. Our branding services help you establish a unique identity that sets you apart from competitors.",
      features: [
        "Brand Strategy Development",
        "Logo & Visual Identity Design",
        "Brand Guidelines Creation",
        "Brand Messaging & Positioning",
        "Brand Collateral Design"
      ],
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-24">
          <Container>
            <FadeIn>
              <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                Specialized IT services and solutions to help your business thrive in today's competitive marketplace. We focus on delivering quality and innovation in everything we do.
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Services List */}
        <div className="py-16 bg-gray-50">
          <Container>
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`py-16 ${index !== 0 ? "border-t border-gray-200" : ""}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <FadeIn className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={200} className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-purple-50 text-purple-600 mb-6">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    <p className="mt-4 text-lg text-gray-600">{service.description}</p>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
                      <ul className="mt-4 space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mr-3">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <Link to="/contact">
                        <Button size="lg" className="bg-black hover:bg-gray-800 text-white">Get Started</Button>
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
