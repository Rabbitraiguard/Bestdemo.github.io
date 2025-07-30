import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Package, Truck, FileText, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "หน้าแรก", href: "/", icon: Package },
    { name: "บริการ", href: "/services", icon: Truck },
    { name: "เกี่ยวกับเรา", href: "/about", icon: User },
    { name: "ขอใบเสนอราคา", href: "/quote", icon: FileText },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-primary">LogiThai Express</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Button variant="default" className="bg-secondary hover:bg-secondary/90">
              ติดต่อเรา
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button variant="default" className="w-full mt-4 bg-secondary hover:bg-secondary/90">
                ติดต่อเรา
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;