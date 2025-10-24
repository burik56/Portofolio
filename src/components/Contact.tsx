import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link with form data
    const subject = encodeURIComponent(`Pesan dari ${formData.name}`);
    const body = encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`);
    const mailtoLink = `mailto:adenseptian@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'adenseptian@gmail.com',
      link: 'mailto:adenseptian@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+62 85608496149',
      link: 'tel:+6285608496149',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        {/* Data stream effects */}
        <div className="data-stream" style={{ top: '5%', animationDelay: '0s' }}>
          01000011 01101111 01101110 01110100 01100001 01100011 01110100 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000
        </div>
        <div className="data-stream" style={{ top: '15%', animationDelay: '4s' }}>
          01000111 01100101 01110100 00100000 01001001 01101110 00100000 01010100 01101111 01110101 01100011 01101000 00100000 00100000 00100000 00100000 00100000 00100000
        </div>
        <div className="data-stream" style={{ top: '25%', animationDelay: '8s' }}>
          01001101 01100101 01110011 01110011 01100001 01100111 01100101 00100000 01000110 01101111 01110010 01101101 00100000 00100000 00100000 00100000 00100000 00100000
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-blue">
            Hubungi Saya
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto glow-blue"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Punya proyek dalam pikiran atau ingin berkolaborasi? Jangan ragu untuk menghubungi!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 glow-blue">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 cyber-border rounded-lg p-4 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm hover:from-blue-500/10 transition-all duration-300 group"
                  >
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="cyber-border rounded-lg p-6 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 glow-blue">
                Mari Terhubung
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang
                untuk menjadi bagian dari visi Anda. Baik Anda memiliki pertanyaan atau hanya ingin menyapa,
                Saya akan berusaha sebaik mungkin untuk membalas Anda!
              </p>
            </div>
          </div>

          <div className="cyber-border rounded-lg p-8 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white transition-all"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white transition-all"
                  placeholder="email.anda@contoh.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white transition-all resize-none"
                  placeholder="Pesan Anda..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-semibold rounded-lg transition-all duration-300 border-glow hover:border-glow-hover flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Mengirim...'
                ) : (
                  <>
                    Kirim Pesan
                    <Send size={20} />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center text-green-400 font-medium">
                  Pesan berhasil dikirim!
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-blue-500/20 pt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Aden. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
