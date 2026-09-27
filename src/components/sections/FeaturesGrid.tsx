import { Link } from 'react-router-dom';
import { MessageSquare, Sun, Calendar } from 'lucide-react';

export const FeaturesGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/consultation" className="group">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Konsultasi Tani</h3>
              <p className="text-gray-600 text-center">
                Dapatkan solusi untuk masalah pertanian Anda melalui konsultasi dengan AI
              </p>
            </div>
          </Link>

          <Link to="/weather" className="group">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Sun className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Info Cuaca</h3>
              <p className="text-gray-600 text-center">
                Pantau informasi cuaca terkini untuk perencanaan pertanian yang lebih baik
              </p>
            </div>
          </Link>

          <Link to="/calendar" className="group">
            <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Kalender Tanaman</h3>
              <p className="text-gray-600 text-center">
                Kelola jadwal penanaman dan pemeliharaan tanaman Anda
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};