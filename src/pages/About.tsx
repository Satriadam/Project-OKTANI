import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4CAF50] text-white p-4 flex items-center">
        <Link to="/profile" className="flex items-center">
          <ArrowLeft className="mr-2" />
          <span className="text-xl font-bold">Tentang Perusahaan</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-64">
        <img 
          src="public/assets/f59c5c69-d254-4c93-bbb9-f70f5b08f5d2.png"
          alt="Company Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold mb-4">OK TANI</h1>
          <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center text-xl font-bold">
            LP
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* About Us */}
        <section className="mb-8">
          <h2 className="text-[#4CAF50] text-xl font-semibold mb-4">Tentang Kami</h2>
          <p className="text-gray-700">
            Perusahaan kami adalah pionir dalam pengembangan solusi teknologi berkelanjutan yang berfokus pada inovasi dan kepuasan pelanggan. Didirikan pada tahun 2010, kami telah berkembang menjadi pemimpin industri dengan komitmen kuat terhadap kualitas dan keberlanjutan.
          </p>
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="text-[#4CAF50] text-xl font-semibold mb-4">Pencapaian Kami</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-[#4CAF50] mb-2">100+</div>
              <div className="text-gray-600">Klien</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-[#4CAF50] mb-2">50+</div>
              <div className="text-gray-600">Proyek</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-[#4CAF50] mb-2">10+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="mb-8">
          <h2 className="text-[#4CAF50] text-xl font-semibold mb-4">Sejarah Perusahaan</h2>
          <div className="relative pl-8 border-l-2 border-[#4CAF50] space-y-8">
            <div className="relative">
              <div className="absolute -left-[35px] w-6 h-6 bg-[#4CAF50] rounded-full"></div>
              <div>
                <div className="font-semibold text-[#4CAF50]">2010</div>
                <div>Perusahaan didirikan</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] w-6 h-6 bg-[#4CAF50] rounded-full"></div>
              <div>
                <div className="font-semibold text-[#4CAF50]">2015</div>
                <div>Ekspansi ke pasar internasional</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] w-6 h-6 bg-[#4CAF50] rounded-full"></div>
              <div>
                <div className="font-semibold text-[#4CAF50]">2020</div>
                <div>Peluncuran produk unggulan</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] w-6 h-6 bg-[#4CAF50] rounded-full"></div>
              <div>
                <div className="font-semibold text-[#4CAF50]">2024</div>
                <div>Pencapaian 100+ klien</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-[#4CAF50] text-xl font-semibold mb-4">Hubungi Kami</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-[#4CAF50] mr-2">📍</span>
              <span>Jl. Contoh No. 123, Jakarta</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#4CAF50] mr-2">📧</span>
              <span>contact@perusahaan.com</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#4CAF50] mr-2">📞</span>
              <span>+62 123 4567 890</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;