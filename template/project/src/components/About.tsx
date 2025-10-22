import { Code2, Zap, Palette } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Performance',
      description: 'Optimizing applications for lightning-fast loading and interactions',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces that users love',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-blue">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto glow-blue"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate web developer with a love for creating innovative digital solutions.
              With expertise in modern web technologies, I transform ideas into reality through
              clean, efficient code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development has been driven by curiosity and a constant desire
              to learn and adapt to new technologies. I believe in writing code that not only
              works but is also maintainable and scalable.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25"></div>
            <div className="relative cyber-border electric-border rounded-lg p-8 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm neon-box">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-blue-500/20">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-blue-400 font-semibold glow-blue">Your Name</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-blue-500/20">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-blue-400 font-semibold glow-blue">Your City, Country</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-blue-500/20">
                  <span className="text-gray-400">Experience:</span>
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
