import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AboutSection = () => {
  const teamMembers = [
    {
      name: "M. Hisyam Ahmad Hasan Hazmi",
      role: "Project Manager",
      image: "public/assets/hisyam.jpeg",
    },
    {
      name: "Kania Purnarahayu",
      role: "R&D",
      image: "public/assets/kania.jpeg",
    },
    {
      name: "Muhammad Fajar Satria Adam",
      role: "Front End Developer",
      image: "public/assets/fajar.jpg",
    },
    {
      name: "Bayu Putra",
      role: "Back End Developer",
      image: "public/assets/bayu.jpeg",
    },
    {
      name: "Gilang Putra Pamungkas",
      role: "UI/UX Designer",
      image: "public/assets/gilang.jpeg",
    },
    {
      name: "Wafaunnisa",
      role: "Test Engineer",
      image: "public/assets/wafa.jpeg",
    },
    {
      name: "Nurazizah Zahra",
      role: "Marketing 1",
      image: "public/assets/zizah.jpeg",
    },
    {
      name: "Rahman Rizaluddin",
      role: "Marketing 2",
      image: "public/assets/rahman.jpeg",
    },
    {
      name: "M. Rizki Herdian",
      role: "Security Specialist",
      image: "public/assets/rizki.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tentang OK TANI
        </h2>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Visi Kami
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Menjadi platform digital terpercaya dan inovatif yang berkomitmen
              untuk memajukan sektor pertanian Indonesia melalui integrasi
              teknologi modern, sistem informasi yang akurat, dan layanan
              konsultasi berbasis kecerdasan buatan. Platform ini dirancang
              untuk memberikan solusi komprehensif bagi para petani dalam
              mengoptimalkan hasil pertanian mereka melalui fitur-fitur unggulan
              seperti sistem prediksi cuaca yang akurat, kalender tanam digital
              yang presisi, dan layanan konsultasi tani yang responsif.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Misi Kami
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Menyediakan layanan konsultasi pertanian berbasis kecerdasan
              buatan (chatbot) yang mudah diakses dan responsif untuk membantu
              petani mengatasi berbagai permasalahan pertanian. Mengembangkan
              sistem kalender tanam digital yang akurat untuk mengoptimalkan
              waktu dan hasil panen petani. Memberikan informasi cuaca real-time
              dan prediksi yang tepat untuk membantu petani dalam pengambilan
              keputusan terkait aktivitas pertanian.
            </p>
          </div>
        </div>

        {/* Tim OK TANI Section */}
        <div className="mb-20 mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Tim OK TANI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                    <Avatar className="w-44 h-44">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-center mb-1">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
