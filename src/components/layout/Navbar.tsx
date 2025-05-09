
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/8e9729e2-5d51-403a-9f09-470eaacd0ae9.png" 
                alt="Pixel Sync Logo" 
                className="h-10 w-auto" 
              />
              <span className="text-2xl font-bold text-black">
                Pixel Sync
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            <Link to="/contact">
              <Button className="rounded-md">Get IT Services & Solutions</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-scale-in origin-top">
            <div className="mt-4 space-y-4 pb-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-base font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">Get IT Services & Solutions</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
