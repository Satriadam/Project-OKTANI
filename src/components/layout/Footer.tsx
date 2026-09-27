import { Link } from "react-router-dom";
import { Youtube, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#2B5329] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hubungi Kami Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                pertaniandigitaloktani@gmail.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +62 898-8708-158
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Jl. Raya Cibolang Cisaat, Kabupaten Sukabumi, Jawa Barat 43152
              </p>
              <p className="ml-6">Sukabumi, Indonesia</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.youtube.com/@PERTANIANOKTANI"
                className="text-white hover:text-gray-300"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.instagram.com/oktani2k24?igsh=b2FreTh5a2xpamVp"
                className="text-white hover:text-gray-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://wa.me/+628988708158"
                className="text-white hover:text-gray-300"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Kategori Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-gray-300">
                  Pertanian Modern
                </button>
              </li>
              <li>
                <button className="hover:text-gray-300">Tips & Trik</button>
              </li>
              <li>
                <button className="hover:text-gray-300">
                  Teknologi Pertanian
                </button>
              </li>
              <li>
                <button className="hover:text-gray-300">Agribisnis</button>
              </li>
              <li>
                <button className="hover:text-gray-300">Komunitas</button>
              </li>
            </ul>
          </div>

          {/* Tautan Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-gray-300"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-gray-300"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("info")}
                  className="hover:text-gray-300"
                >
                  Informasi/Media
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="hover:text-gray-300"
                >
                  Fitur
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-gray-300"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
