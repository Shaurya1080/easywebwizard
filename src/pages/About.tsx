
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { Briefcase, Award, Heart } from "lucide-react";

const About = () => {
  const leadershipTeam = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      bio: "With over 20 years of experience in the IT industry, John has led multiple Fortune 500 technology initiatives.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "Lisa Chen",
      position: "CTO",
      bio: "Lisa is a technology pioneer with expertise in cloud architecture, AI, and enterprise solutions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "Mark Johnson",
      position: "Head of Cybersecurity",
      bio: "Mark has protected critical infrastructure for government agencies and global corporations for over 15 years.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
    },
    {
      name: "Sarah Williams",
      position: "Director of Client Services",
      bio: "Sarah ensures our clients receive exceptional service and that their technology needs are fully addressed.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-24">
          <Container>
            <FadeIn>
              <h1 className="text-4xl font-bold sm:text-5xl">About TechPro</h1>
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

        {/* Leadership Team */}
        <div className="py-16 sm:py-24">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
                <p className="mt-6 text-lg text-gray-600">
                  Meet the experts who lead our organization and drive our commitment to excellence.
                </p>
              </div>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {leadershipTeam.map((member, index) => (
                <FadeIn key={member.name} delay={200 + index * 100}>
                  <div className="text-center">
                    <div className="mx-auto h-40 w-40 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600">{member.position}</p>
                    <p className="mt-3 text-gray-600">{member.bio}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
