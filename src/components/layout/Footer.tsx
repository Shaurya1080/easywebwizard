
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
        { name: "Web Development", href: "/services#web" },
        { name: "App Development", href: "/services#app" },
        { name: "Game Development", href: "/services#game" },
        { name: "Social Media Management", href: "/services#social" },
        { name: "Ads Designing", href: "/services#ads" },
        { name: "Digital Marketing", href: "/services#digital-marketing" },
        { name: "Branding & Identity", href: "/services#branding" },
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
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/8e9729e2-5d51-403a-9f09-470eaacd0ae9.png" 
                  alt="Pixel Sync Logo" 
                  className="h-10 w-auto mr-3" 
                />
                <span className="text-xl font-bold text-white">Pixel Sync</span>
                <span className="ml-2 text-sm text-gray-400">pixelsync.in</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Empowering businesses through innovative IT services and solutions. We help you transform, scale, and secure your digital presence.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com/pixelsync.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com/pixelsync_in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com/company/pixelsync" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
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
                  Sancoale, Goa
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-sm text-gray-400">+91 6394944272</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <a href="mailto:inquiries@pixelsync.in" className="text-sm text-gray-400 hover:text-white transition-colors">inquiries@pixelsync.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Pixel Sync. All rights reserved. | <a href="https://pixelsync.in" className="hover:text-white">pixelsync.in</a>
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
