
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Cloud Solutions", href: "/services#cloud" },
        { name: "Cybersecurity", href: "/services#security" },
        { name: "Software Development", href: "/services#development" },
        { name: "IT Consulting", href: "/services#consulting" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-6 lg:grid-cols-12">
          <div className="md:col-span-3 lg:col-span-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold bg-clip-text text-white">
                TechPro
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Empowering businesses through innovative IT solutions. We help you transform, scale, and secure your technology infrastructure.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-1 lg:col-span-2">
              <h3 className="text-sm font-semibold text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                <span className="text-sm text-gray-400">
                  123 Tech Avenue, San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm text-gray-400">info@techpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} TechPro. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              Designed & Developed with excellence
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
