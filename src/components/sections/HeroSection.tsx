import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative" 
      style={{
        backgroundImage: `url('public/assets/landing page oktani.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Selamat Datang di OK TANI
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Platform digital untuk mendukung kesejahteraan petani Indonesia melalui teknologi modern
        </p>
        <Link
          to="/register"
          className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary-hover inline-block"
        >
          Mulai Sekarang
        </Link>
      </div>
    </section>
  );
};