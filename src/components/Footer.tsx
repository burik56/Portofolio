import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ComponentType<{ size?: number }>> = {
      Github,
      Linkedin,
      Twitter,
      Mail
    };
    return icons[iconName];
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 relative animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-slate-400 mb-4">
              {personalInfo.tagline}
            </p>
            <p className="text-slate-400 text-sm">
              {personalInfo.location}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Terhubung Dengan Saya</h4>
            <div className="flex gap-4">
              {socialLinks.map((link: { name: string; url: string; icon: string }) => {
                const Icon = getIcon(link.icon);
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-slate-400 mt-4 text-sm">
              Jangan ragu untuk menghubungi untuk kolaborasi atau sekadar obrolan ramah!
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} {personalInfo.name}. Dibuat dengan{' '}
            <Heart size={16} className="text-red-500 inline animate-pulse" /> dan banyak kopi
          </p>
          <p className="text-slate-400 text-sm">
            Hak cipta dilindungi
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-24 right-8 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
}
