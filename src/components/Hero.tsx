import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import fotoAden from "../assets/IMG_20230507_143809.jpg";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "Web Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl"></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}

        <div className="lightning-bolt" style={{ left: "20%" }}></div>
        <div className="lightning-bolt" style={{ left: "80%" }}></div>

        {/* Electric border effects */}
        <div className="electric-border absolute inset-0 pointer-events-none"></div>

        {/* Data stream effects */}
        <div
          className="data-stream"
          style={{ top: "10%", animationDelay: "0s" }}
        >
          01010101 01101000 01100101 01101100 01101100 01101111 00100000
          01010111 01101111 01110010 01101100 01100100
        </div>
        <div
          className="data-stream"
          style={{ top: "30%", animationDelay: "3s" }}
        >
          01001001 00100111 01101101 00100000 01000001 00100000 01000100
          01100101 01110110 01100101 01101100 01101111 01110000 01100101
          01110010
        </div>
        <div
          className="data-stream"
          style={{ top: "70%", animationDelay: "6s" }}
        >
          01000011 01110010 01100101 01100001 01110100 01101001 01101110
          01100111 00100000 01000011 01111001 01100010 01100101 01110010
          00100000 01000101 01111000 01110000 01100101 01110010 01101001
          01100101 01101110 01100011 01100101 01110011
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-8 fade-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 neon-box">
              <img
                src={fotoAden}
                alt="Aden"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hologram-effect"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black animate-pulse"></div>
          </div>
        </div>

        <div className="scan-line mb-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 fade-in">
            Halo, Saya <span className="glow-blue-strong">Aden</span>
          </h1>
        </div>

        <div className="h-20 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-400 glow-blue">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 fade-in">
          Menciptakan pengalaman digital yang menakjubkan dengan teknologi web
          modern. Berspesialisasi dalam membangun aplikasi responsif dan ramah
          pengguna.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 fade-in">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 border-glow hover:border-glow-hover"
          >
            Hubungi Saya
          </button>
          <a
            href="#projects"
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg transition-all duration-300 border-glow"
          >
            Lihat Proyek
          </a>
        </div>

        <div className="flex gap-6 justify-center fade-in">
          <a
            href="https://github.com/burik56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 pulse-glow p-3 rounded-full border border-blue-500/20"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aden-septian-sasmito-a23261309/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 pulse-glow p-3 rounded-full border border-blue-500/20"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:adenseptian52@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 pulse-glow p-3 rounded-full border border-blue-500/20"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-blue-400" size={32} />
      </div>
    </section>
  );
}
