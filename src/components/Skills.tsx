export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Figma', level: 75 },
        { name: 'AWS', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        {/* Data stream effects */}
        <div className="data-stream" style={{ top: '5%', animationDelay: '0s' }}>
          01010011 01101011 01101001 01101100 01101100 01110011 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000
        </div>
        <div className="data-stream" style={{ top: '15%', animationDelay: '5s' }}>
          01010100 01100101 01100011 01101000 01101110 01101111 01101100 01101111 01100111 01111001 00100000 01010011 01110100 01100001 01100011 01101011 00100000 00100000
        </div>
        <div className="data-stream" style={{ top: '25%', animationDelay: '10s' }}>
          01000101 01111000 01110000 01100101 01110010 01110100 01101001 01110011 01100101 00100000 01001100 01100101 01110110 01100101 01101100 00111010 00100000 00111001 00110000 00100101 00101011
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-blue animate-fadeIn">
            Keahlian & Keahlian
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto glow-blue animate-fadeIn" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="cyber-border rounded-lg p-6 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm animate-fadeInUp"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 glow-blue">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out pulse-glow"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Selalu belajar dan mengembangkan keahlian saya untuk tetap mengikuti tren industri
          </p>
        </div>
      </div>
    </section>
  );
}
