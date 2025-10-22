import { Code2, Zap, Palette } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Kode Bersih',
      description: 'Menulis kode yang mudah dipelihara dan dapat diskalakan dengan mengikuti praktik terbaik',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performa Cepat',
      description: 'Mengoptimalkan aplikasi untuk pemuatan dan interaksi yang sangat cepat',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Desain Modern',
      description: 'Menciptakan antarmuka yang indah dan intuitif yang disukai pengguna',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        {/* Data stream effects */}
        <div className="data-stream" style={{ top: '5%', animationDelay: '0s' }}>
          01000001 01100010 01101111 01110101 01110100 00100000 01001101 01100101 00100000 01010011 01100101 01100011 01110100 01101001 01101111 01101110
        </div>
        <div className="data-stream" style={{ top: '15%', animationDelay: '4s' }}>
          01010000 01110010 01101111 01100110 01100101 01110011 01110011 01101001 01101111 01101110 01100001 01101100 00100000 01010011 01101011 01101001 01101100 01101100 01110011 00100000 00100001
        </div>
        <div className="data-stream" style={{ top: '25%', animationDelay: '8s' }}>
          01000011 01101111 01100100 01100101 00100000 01010001 01110101 01100001 01101100 01101001 01110100 01111001 00100000 00110100 00110011 00110010
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-blue">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto glow-blue"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Saya adalah web developer yang bersemangat dengan kecintaan untuk menciptakan solusi digital yang inovatif.
              Dengan keahlian dalam teknologi web modern, saya mengubah ide menjadi kenyataan melalui
              kode yang bersih dan efisien.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Perjalanan saya dalam pengembangan web didorong oleh rasa ingin tahu dan keinginan yang konstan
              untuk belajar dan beradaptasi dengan teknologi baru. Saya percaya dalam menulis kode yang tidak hanya
              berfungsi tetapi juga mudah dipelihara dan dapat diskalakan.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ketika saya tidak sedang coding, Anda akan menemukan saya menjelajahi teknologi baru, berkontribusi pada
              proyek open-source, atau berbagi pengetahuan dengan komunitas developer.
            </p>
          </div>

          <div className="relative electric-border">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25"></div>
            <div className="relative cyber-border rounded-lg p-8 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm neon-box">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-blue-500/20">
                  <span className="text-gray-400">Nama:</span>
                  <span className="text-blue-400 font-semibold glow-blue">Aden</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-blue-500/20">
                  <span className="text-gray-400">Lokasi:</span>
                  <span className="text-blue-400 font-semibold glow-blue">Your City, Country</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-blue-500/20">
                  <span className="text-gray-400">Pengalaman:</span>
                  <span className="text-blue-400 font-semibold glow-blue">X+ Years</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-blue-400 font-semibold glow-blue">your.email@example.com</span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-px h-full">
                <div className="circuit-line h-20" style={{ animationDelay: '0s' }}></div>
              </div>
              <div className="absolute bottom-0 left-0 w-px h-full">
                <div className="circuit-line h-20" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative cyber-border electric-border rounded-lg p-6 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm hover:from-blue-500/10 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 hologram-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400 glow-blue">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>

              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="particle absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: '0',
                    animationDelay: `${i * 2}s`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
