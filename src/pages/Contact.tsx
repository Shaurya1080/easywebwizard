
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/animations/FadeIn";
import { Phone, Mail, MapPin, Clock, Users, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { submitContactForm } from "@/services/contactService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later or contact us directly."
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
          <Container>
            <FadeIn>
              <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl">
                Have questions about our IT services? Get in touch with our team of experts for personalized assistance.
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Contact Information Section */}
        <div className="py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                  <p className="mt-2 text-lg text-gray-600">+91 9555893606</p>
                  <p className="mt-1 text-gray-500">Monday-Friday: 9AM-6PM IST</p>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                  <p className="mt-2 text-lg text-gray-600">shauryasd123@gmail.com</p>
                  <p className="mt-1 text-gray-500">We'll respond within 24 hours</p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
                  <p className="mt-2 text-lg text-gray-600">Sancoale, Goa</p>
                  <p className="mt-1 text-gray-500">India</p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </div>

        {/* Contact Form and Map Section */}
        <div className="py-16 bg-gray-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Fill out the form below, and one of our experts will get back to you promptly.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Fast response times</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Expert consultants</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">Personalized solutions</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="h-full">
                  <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Visit our headquarters in Sancoale, Goa, India.
                  </p>
                  <div className="mt-8 h-[400px] rounded-xl overflow-hidden shadow-sm bg-white border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30764.915342713675!2d73.88163621562497!3d15.383254699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba10600ca6c3%3A0xf989f9a2db006ce7!2sSancoale%2C%20Goa!5e0!3m2!1sen!2sin!4v1691428954015!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pixel Sync Office Location"
                    ></iframe>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </div>

        {/* FAQ Section */}
        <div className="py-16">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Find quick answers to common questions about our services.
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 max-w-3xl mx-auto">
              <FadeIn delay={100}>
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      What industries do you specialize in?
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We serve clients across various industries including healthcare, finance, retail, manufacturing, and education. Our team has specialized expertise in each of these sectors.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      How quickly can you respond to IT emergencies?
                    </h3>
                    <p className="mt-2 text-gray-600">
                      For clients on our managed services plans, we offer 24/7 emergency support with response times as quick as 15 minutes for critical issues. Our team is always ready to address urgent concerns.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Do you offer custom software development?
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Yes, we provide custom software development services tailored to your specific business needs. Our developers work closely with you to create solutions that align with your objectives.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      How do you handle data security?
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We implement comprehensive security measures including encryption, multi-factor authentication, regular security audits, and employee training to ensure your data remains protected.
                    </p>
                  </div>
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

export default Contact;
