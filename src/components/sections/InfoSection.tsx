import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const InfoSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="info">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Informasi & Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="public/assets/b4e5a691-905b-4882-ba36-c03d799a0b6a.png"
                alt="Petani bekerja di ladang"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Berita Terkini</CardTitle>
              <CardDescription className="text-gray-600 text-center">
                Update terbaru seputar dunia pertanian dan teknologi.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="https://psp.pertanian.go.id/berita?page=6" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Kumpulan Berita Terkini
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="public/assets/60864ad6-273b-4608-8074-19ace9484a48.png"
                alt="Petani di ladang"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Artikel Edukasi</CardTitle>
              <CardDescription className="text-gray-600 text-center">
                Berbagai artikel informatif tentang teknik pertanian modern.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="https://edupertanian.ac.id/edukasi/" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Baca Artikel Edukasi
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="public/assets/a6908f4d-2c51-4734-b90c-271705eff233.png"
                alt="Petani memanen"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">Media Gallery</CardTitle>
              <CardDescription className="text-gray-600 text-center">
                Dokumentasi kegiatan dan pencapaian para petani indonesia.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="https://tanamanpangan.pertanian.go.id/en/galeri/foto" className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover">
                Lihat Gallery
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};