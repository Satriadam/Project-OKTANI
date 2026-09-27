import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="public/assets/3eb7ccb9-aa7b-4535-bfc0-c4d98385b6ce.png"
              alt="OK TANI Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-primary">OK TANI</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-primary"
            >
              BERANDA
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-primary"
            >
              TENTANG WEB
            </button>
            <button
              onClick={() => scrollToSection('info')}
              className="text-gray-600 hover:text-primary"
            >
              INFORMASI / MEDIA
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-primary"
            >
              FITUR
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-primary"
            >
              KONTAK
            </button>
            <Link to="/login">
              <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white">
                Login/Masuk
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-primary px-4 py-2"
              >
                BERANDA
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-primary px-4 py-2"
              >
                TENTANG WEB
              </button>
              <button
                onClick={() => scrollToSection('info')}
                className="text-gray-600 hover:text-primary px-4 py-2"
              >
                INFORMASI / MEDIA
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-primary px-4 py-2"
              >
                FITUR
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-primary px-4 py-2"
              >
                KONTAK
              </button>
              <Link to="/register" className="px-4">
                <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white">
                  Daftar/Masuk
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};