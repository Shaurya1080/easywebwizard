
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { Briefcase, Award, Heart, Code, Globe, Smartphone, Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const leadershipTeam = [
    {
      name: "Shaurya Tripathi",
      position: "CEO & Founder",
      bio: "With a vision for innovation and a passion for technology, Shaurya leads Pixel Sync with strategic insight and a commitment to excellence.",
      image: "/lovable-uploads/e0876fa0-f04d-4d75-84de-f550f28cef5e.png"
    },
    {
      name: "Khushi Agarwal",
      position: "Co-Founder",
      bio: "Khushi brings creative direction and business acumen to Pixel Sync, helping shape our client-centered approach to digital solutions.",
      image: "/lovable-uploads/10fa6faa-06eb-407d-9c06-a2d82b8a446b.png"
    },
    {
      name: "Aradhyaa Maavi",
      position: "Marketing Head",
      bio: "Aradhyaa drives our marketing initiatives with innovative strategies that connect our solutions with businesses seeking digital transformation.",
      image: "/lovable-uploads/e4d20f0a-92c6-4dee-bb94-0c2f12093413.png"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality IT solutions that exceed our clients' expectations.",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to provide cutting-edge solutions.",
      icon: Briefcase
    },
    {
      title: "Client Focus",
      description: "We prioritize our clients' needs and build lasting relationships based on trust and mutual success.",
      icon: Heart
    }
  ];

  const sampleProjects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully responsive e-commerce platform with secure payment processing and inventory management.",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      icon: Globe
    },
    {
      title: "Food Delivery App",
      category: "App Development",
      description: "A user-friendly mobile application allowing customers to order food from local restaurants with real-time tracking.",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      icon: Smartphone
    },
    {
      title: "Cybersecurity Solution",
      category: "IT Security",
      description: "Comprehensive security infrastructure for a financial institution that protects sensitive customer data.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      icon: Shield
    },
    {
      title: "Custom CRM System",
      category: "Software Development",
      description: "Tailor-made customer relationship management system for a growing business with advanced analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-24">
          <Container>
            <FadeIn>
              <h1 className="text-4xl font-bold sm:text-5xl">About Pixel Sync</h1>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl">
                We're a team of passionate IT professionals dedicated to helping businesses leverage technology for growth and competitive advantage.
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Mission Section */}
        <div className="py-16 sm:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                  <p className="mt-6 text-lg text-gray-600">
                    Our mission is to empower businesses through innovative technology solutions that drive growth, increase efficiency, and enhance security. We strive to be a trusted partner in our clients' digital transformation journeys.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                  <p className="mt-6 text-lg text-gray-600">
                    We envision a world where technology simplifies business operations and creates new opportunities for innovation. We aim to be the leading provider of comprehensive IT services that help organizations thrive in the digital era.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </div>

        {/* Values Section */}
        <div className="py-16 sm:py-24 bg-gray-50">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
                <p className="mt-6 text-lg text-gray-600">
                  These principles guide everything we do and shape our approach to client relationships and service delivery.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <FadeIn key={value.title} delay={200 + index * 100}>
                  <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="mt-4 text-gray-600">{value.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </div>

        {/* Sample Projects Section */}
        <div className="py-16 sm:py-24">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900">Our Sample Projects</h2>
                <p className="mt-6 text-lg text-gray-600">
                  Take a look at some of our recent work across various industries and technologies.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {sampleProjects.map((project, index) => (
                <FadeIn key={project.title} delay={200 + index * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 mb-4">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium text-purple-600">{project.category}</p>
                      <h3 className="mt-2 text-xl font-semibold text-gray-900">{project.title}</h3>
                      <p className="mt-3 text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={600}>
              <div className="mt-12 text-center">
                <Link to="/case-studies">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    View All Case Studies
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </Container>
        </div>

        {/* Leadership Team */}
        <div className="py-16 sm:py-24 bg-gray-50">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
                <p className="mt-6 text-lg text-gray-600">
                  Meet the experts who lead our organization and drive our commitment to excellence.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
              {leadershipTeam.map((member, index) => (
                <FadeIn key={member.name} delay={200 + index * 100}>
                  <div className="text-center">
                    <div className="mx-auto h-60 w-60 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600">{member.position}</p>
                    <p className="mt-3 text-gray-600">{member.bio}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </div>

        {/* Contact Information */}
        <div className="py-16 sm:py-24">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                <p className="mt-6 text-lg text-gray-600">
                  We're always looking forward to hearing from you. Contact us through any of these channels.
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <FadeIn delay={100}>
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                  <p className="mt-4 text-gray-600">+91 9555893606</p>
                  <p className="mt-2 text-gray-500">Available 9am-6pm, Monday-Friday</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                  <p className="mt-4 text-gray-600">shauryasd123@gmail.com</p>
                  <p className="mt-2 text-gray-500">We'll respond within 24 hours</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
                  <p className="mt-4 text-gray-600">Sancoale, Goa</p>
                  <p className="mt-2 text-gray-500">India</p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
