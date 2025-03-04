
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Lock, 
  Code, 
  Terminal, 
  Database, 
  Users, 
  Server, 
  Laptop, 
  Shield,
  Network
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "cloud",
      title: "Cloud Computing Solutions",
      description: "Transform your IT infrastructure with our comprehensive cloud services. We help businesses migrate to the cloud, optimize cloud resources, and manage cloud environments for maximum efficiency and cost-effectiveness.",
      features: [
        "Cloud Migration & Implementation",
        "Hybrid Cloud Solutions",
        "Cloud Security & Compliance",
        "Cloud Infrastructure Optimization",
        "Disaster Recovery & Backup"
      ],
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "security",
      title: "Cybersecurity Solutions",
      description: "Protect your business from cyber threats with our comprehensive security services. We provide robust security solutions that safeguard your data, systems, and networks from increasingly sophisticated cyber attacks.",
      features: [
        "Security Assessments & Audits",
        "Threat Detection & Response",
        "Network Security",
        "Data Protection & Encryption",
        "Security Training & Awareness"
      ],
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "development",
      title: "Software Development",
      description: "Create custom software solutions tailored to your unique business needs. Our experienced developers build scalable, secure, and user-friendly applications that streamline operations and drive growth.",
      features: [
        "Custom Application Development",
        "Web & Mobile Applications",
        "API Integration & Development",
        "Legacy System Modernization",
        "Quality Assurance & Testing"
      ],
      icon: Code,
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "consulting",
      title: "IT Consulting",
      description: "Gain strategic insights and expert guidance to align your technology investments with business objectives. Our consultants help you navigate complex IT decisions and develop technology roadmaps for success.",
      features: [
        "IT Strategy & Planning",
        "Digital Transformation",
        "Technology Assessment",
        "IT Governance & Compliance",
        "Vendor Selection & Management"
      ],
      icon: Users,
      image: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "managed",
      title: "Managed IT Services",
      description: "Focus on your core business while we handle your IT infrastructure. Our managed IT services provide proactive monitoring, maintenance, and support to ensure your systems run smoothly and efficiently.",
      features: [
        "24/7 Monitoring & Support",
        "Network Management",
        "Server & Desktop Management",
        "Help Desk Services",
        "IT Asset Management"
      ],
      icon: Server,
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "data",
      title: "Data Management",
      description: "Harness the power of your data with our comprehensive data management solutions. We help businesses store, protect, analyze, and visualize data for better decision-making and business intelligence.",
      features: [
        "Database Design & Management",
        "Data Warehousing",
        "Business Intelligence",
        "Data Analytics & Visualization",
        "Big Data Solutions"
      ],
      icon: Database,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-24">
          <Container>
            <FadeIn>
              <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl">
                Comprehensive IT solutions tailored to your business needs. We combine technical expertise with industry knowledge to deliver results that drive growth.
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Services List */}
        <div className="py-16">
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
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    <p className="mt-4 text-lg text-gray-600">{service.description}</p>
                    
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
                      <ul className="mt-4 space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-3">
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
                        <Button size="lg">Get Started</Button>
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
