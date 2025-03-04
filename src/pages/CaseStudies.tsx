
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "healthcare-cloud",
      title: "Healthcare Provider's Cloud Migration",
      client: "MediCare Health Systems",
      summary: "Helping a major healthcare provider migrate to a secure cloud infrastructure while ensuring HIPAA compliance.",
      challenge: "MediCare Health Systems was struggling with aging on-premises infrastructure that couldn't scale to meet growing patient data needs. They needed a solution that would provide better performance, scalability, and maintain strict HIPAA compliance.",
      solution: "We designed and implemented a custom hybrid cloud solution that securely migrated sensitive patient data while ensuring regulatory compliance. Our solution included advanced encryption, secure access controls, and automated backup systems.",
      results: [
        "50% reduction in IT infrastructure costs",
        "99.99% system uptime since implementation",
        "70% faster data retrieval times",
        "Seamless scaling during 40% patient growth"
      ],
      category: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1581093458791-4f913e8e0953?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "financial-security",
      title: "Financial Institution Cybersecurity Overhaul",
      client: "Global Finance Partners",
      summary: "Implementing robust cybersecurity measures for a financial institution to protect sensitive client data.",
      challenge: "Global Finance Partners faced increasing cyber threats and needed to strengthen their security posture to protect client financial data and maintain regulatory compliance. Their legacy security systems were no longer adequate against sophisticated attacks.",
      solution: "We deployed a comprehensive cybersecurity solution including advanced threat detection, multi-factor authentication, endpoint protection, and security awareness training. We also implemented 24/7 monitoring and incident response protocols.",
      results: [
        "90% reduction in security incidents",
        "100% compliance with financial regulations",
        "Successful prevention of multiple attempted breaches",
        "Enhanced client trust and confidence"
      ],
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "retail-software",
      title: "Retail Chain's E-commerce Platform",
      client: "Urban Market Stores",
      summary: "Developing a custom e-commerce solution that seamlessly integrated with in-store operations for a national retail chain.",
      challenge: "Urban Market Stores needed to expand their business online while maintaining consistency with their in-store operations. They required a solution that would integrate inventory management, customer data, and loyalty programs across both channels.",
      solution: "We built a custom e-commerce platform that integrated with their existing POS and inventory systems. The solution included real-time inventory updates, personalized customer experiences, and a unified loyalty program for online and in-store purchases.",
      results: [
        "35% increase in overall sales within first year",
        "28% improvement in inventory accuracy",
        "42% of in-store customers now also shop online",
        "Reduced operational costs by integrating systems"
      ],
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1607082352121-fa243f3dde7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "manufacturing-digital",
      title: "Manufacturing Company's Digital Transformation",
      client: "Precision Industrial Products",
      summary: "Guiding a manufacturing company through a complete digital transformation to improve efficiency and competitiveness.",
      challenge: "Precision Industrial Products was losing market share due to inefficient processes and inability to adapt to changing market demands. They needed to modernize their operations while minimizing disruption to ongoing production.",
      solution: "We developed a comprehensive digital transformation strategy that included IoT sensors for equipment monitoring, automated workflow systems, and a data analytics platform for production insights. Implementation was phased to minimize disruption.",
      results: [
        "23% increase in manufacturing efficiency",
        "60% reduction in unplanned downtime",
        "18% decrease in operational costs",
        "New data-driven product development initiatives"
      ],
      category: "IT Consulting",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b2d71b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
              <h1 className="text-4xl font-bold sm:text-5xl">Case Studies</h1>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl">
                Explore how we've helped businesses across industries solve complex IT challenges and achieve their strategic goals.
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Case Studies Grid */}
        <div className="py-16 sm:py-24">
          <Container>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {caseStudies.map((study, index) => (
                <FadeIn key={study.id} delay={index * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex-grow">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
                          {study.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                        <p className="mt-2 text-sm text-blue-600">Client: {study.client}</p>
                        <p className="mt-4 text-gray-600">{study.summary}</p>
                      </div>
                      <div className="mt-6">
                        <Link 
                          to={`#${study.id}`} 
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(study.id);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          View case study <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </div>

        {/* Detailed Case Studies */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <Container>
            {caseStudies.map((study, index) => (
              <div key={study.id} id={study.id} className={`py-16 ${index !== 0 ? "border-t border-gray-200" : ""}`}>
                <FadeIn>
                  <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                    {study.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold text-gray-900">{study.title}</h2>
                  <p className="mt-2 text-lg text-blue-600">Client: {study.client}</p>
                
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">The Challenge</h3>
                      <p className="mt-4 text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Our Solution</h3>
                      <p className="mt-4 text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Results</h3>
                      <ul className="mt-4 space-y-3">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start">
                            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-3">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                
                  <div className="mt-12">
                    <Link to="/contact">
                      <Button size="lg">Discuss Your Project</Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
            ))}
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
