import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', text: 'About' },
  { href: '#experience', text: 'Experience' },
  { href: '#education', text: 'Education' },
  { href: '#publications', text: 'Publications' },
  { href: '#projects', text: 'Projects' },
  { href: '#contact', text: 'Contact' },
]

const socialLinks = [
  { name: 'linkedin', href: 'https://www.linkedin.com/in/rohittbhusal/' },
  { name: 'scholar', href: 'https://scholar.google.com/citations?user=rtJiMH4AAAAJ&hl=en' },
]

const userBio = `I am a Computer Engineering Ph.D. student at the University of Nebraska–Lincoln, School of Computing, specializing in 5G/6G wireless networking, generative video AI inference, deep learning, and topological data analysis. My research focuses on combining deep learning and topological methods to improve the reliability and efficiency of networked video and image processing systems. By bridging next-generation communication networks with intelligent data analytics, I aim to develop scalable, resilient, and high-performance networked applications.`

const researchInterests = [
  '5G/6G Networking', 'Generative AI', 'Deep Learning', 'Topological Data Analysis', 'Video Compression', 'Wireless Communication', 'Point Cloud Compression',
]

const experienceData = [
  {
    role: 'Graduate Research Assistant',
    company: 'University of Nebraska-Lincoln',
    location: 'USA',
    duration: 'Aug. 2024 – Present',
    responsibilities: [
      'Topological data analysis for generative AI and semantic error detection/correction.',
      'Established NR 5G (n78 band) testbed with USRPs in OAI for experimental evaluation of generative models via topological data analysis.',
    ],
  },
  {
    role: 'Digital Twin Development and Software Engineer',
    company: 'Smart Scape Inc.',
    location: 'Japan',
    duration: 'Nov. 2023 – Apr. 2024',
    responsibilities: [
      'Developed IoT-enabled digital twin systems integrating real-time sensor data and web apps.',
      'Created 3D models and environments using Unity, C#, and photogrammetry for digital twins.',
      'Automated 360° image placement in digital twin environments with photogrammetry, reducing manual work.',
    ],
  },
  {
    role: 'Technical Assistant Engineer (Academic Industrial Internship)',
    company: 'DoIT, GoN',
    location: 'Nepal',
    duration: 'Jan. 2023 – Apr. 2023',
    responsibilities: [
      'Maintained Windows Server, resolved network issues, and managed hardware/power installations.',
      'Deployed firewalls and virtual servers with IT teams, while optimizing network security and infrastructure.',
    ],
  },
  {
    role: 'Co-Founder & Lead Instructor',
    company: 'Pravat Computer Institute',
    location: 'Nepal',
    duration: 'Jun. 2017 – Jul. 2018',
    responsibilities: [
      'Taught Physics, Chemistry, Mathematics, English, and programming (C, C++, Java, HTML/CSS/JS) across academic programs.',
      'Volunteered as a Business Math/Calculus tutor and assisted with administrative tasks.',
    ],
  },
]

const educationData = [
  {
    degree: 'Ph.D. in Computer Engineering',
    institution: 'University of Nebraska-Lincoln',
    location: 'USA',
    duration: 'Aug. 2024 – Present',
    details: "Courses: Wireless Communication, Advanced Wireless Communication, Deep Learning, Communication Networks, Operating System (Fall '25), Internet of Things (Fall '25)",
  },
  {
    degree: 'BE in Electrical and Electronic (Communication)',
    institution: 'Kathmandu University',
    location: 'Nepal',
    duration: 'Aug. 2018 – Jun. 2023',
    details: 'Thesis topic: Image Transfer using Slow Scan Digital Video (SSDV) Protocol for CubeSat. Relevant Courses: Analog and Digital Signal Processing, Antenna and Propagation, Neural Network and Fuzzy Logic, Wireless Communication, Satellite Communication.',
  },
]

const publicationsData = [
  {
    title: 'TopoCode-PCD: Topological Semantic Error Detection and Correction for Geometric Point Cloud Communication',
    authors: ['Rohit Bhusal', 'H. Guo', 'M. C. Vuran'],
    venue: 'Accepted in IEEE WiOPT 2026',
    year: 2026,
    links: {},
  },
  {
    title: 'Edge-assisted generative AI-driven video communication using topological data analysis',
    authors: ['Rohit Bhusal', 'H. Guo', 'I. F. Akyildiz'],
    venue: 'in Proceedings of the 2025 IEEE 22nd International Conference on Mobile Ad Hoc and Smart Systems (MASS)',
    year: 2025,
    links: { IEEE: 'https://ieeexplore.ieee.org/document/11206189' },
  },
  {
    title: 'Model-Agnostic Uncertainty Quantification for Fast NFC Tag Identification using RF Fingerprinting',
    authors: ['D. A. Sarpong', 'A. Kamrath', 'Rohit Bhusal', 'H. Guo'],
    venue: 'Submitted to IEEE Internet of Things Journal (Under Review)',
    year: 2025,
    links: { arxiv: 'https://arxiv.org/abs/2503.09789' },
  },
]

const projectsData = [
  {
    title: 'Image Transfer using SSDV Protocol for CubeSat',
    description: 'Designed and built an SSDV-based system to transfer images from LEO satellites, demonstrating transmission within short communication windows using USRP.',
    tags: ['SSDV', 'CubeSat', 'USRP', 'Satellite Comms', 'Hardware'],
  },
  {
    title: 'IoT Home Monitoring & Management',
    description: 'Developed a smart home solution using Raspberry Pi with automatic Internet/Intranet mode switching and data management on local and cloud MySQL databases.',
    tags: ['IoT', 'Raspberry Pi', 'MySQL', 'Smart Home', 'Python'],
  },
  {
    title: 'Hardware Intercommunication System',
    description: 'Built a hardware-only intercommunication system using logic ICs, demonstrating reliable voice communication between 5 nodes without microcontrollers.',
    tags: ['Hardware', 'Electronics', 'Logic ICs', 'Voice Comms'],
  },
]

const activitiesData = [
  'Technical Event Head in EEPE-X 2022, organized by the Society of Electrical and Electronics Engineering at Kathmandu University. (Fall 2022)',
  'Raspberry Pi and Electronics Instructor in a training series organized by the Society of Electrical and Electronics Engineering at Kathmandu University. (Summer 2022)',
  'Project Lead for "Ground Station Design and Building for CubeSat" at Orion Space, Bhaktapur, Nepal. (Spring 2022)',
]

function SocialIcon({ name, className = 'h-6 w-6' }) {
  if (name === 'linkedin') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19,3A2,2,0,0,1,21,5V19A2,2,0,0,1,19,21H5A2,2,0,0,1,3,19V5A2,2,0,0,1,5,3H19M18.5,18.5V13.2A3.26,3.26,0,0,0,15.24,9.94C14.39,9.94,13.4,10.43,13,11.1V10.13H10V18.5H13V13.09C13,12.31,13.3,11.6,14.17,11.6C14.9,11.6,15.5,12.2,15.5,13.3V18.5H18.5M6.5,18.5H9.5V10.13H6.5V18.5M8,8.44A1.44,1.44,0,1,0,6.56,7,1.44,1.44,0,0,0,8,8.44Z" />
      </svg>
    )
  }
  if (name === 'scholar') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12,3L1,9L12,15L23,9L12,3M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
      </svg>
    )
  }
  return null
}

function SunIcon({ className = 'h-6 w-6' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.95-4.243l-1.591 1.591M5.25 12H3m4.243-4.95l1.591-1.591M12 9a3 3 0 100 6 3 3 0 000-6z" />
    </svg>
  )
}

function MoonIcon({ className = 'h-6 w-6' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ? stored === 'dark' : prefersDark
    setDarkMode(initial)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 font-sans antialiased transition-colors duration-300 min-h-screen">
      <header className="bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800">
        <nav className="container mx-auto px-6 md:px-10 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-3 text-xl font-bold font-serif text-slate-900 dark:text-slate-100 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
                <img src="./favicon.png" alt="Logo" className="h-8 w-8 rounded-md" />
                <span>Rohit Bhusal</span>
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              <div className="ml-6">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-slate-500 hover:text-sky-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300"
                  aria-label="Toggle theme"
                >
                  {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 hover:text-sky-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="ml-2 bg-slate-100 dark:bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-sky-500"
                aria-label="Open main menu"
              >
                {menuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="container mx-auto px-6 py-8 md:px-10 lg:px-20">
        <section className="flex items-center py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <img
                src="./ph_oto.jpg"
                alt="Rohit Bhusal"
                className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover shadow-lg border-4 border-slate-300 dark:border-slate-700 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold font-serif text-slate-900 dark:text-slate-100 leading-tight mb-4">
                Rohit Bhusal
              </h1>
              <p className="text-xl md:text-2xl text-sky-600 dark:text-sky-400 font-medium mb-6">
                PhD Student in Computer Engineering
              </p>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0 mb-8">
                Specializing in 5G/6G wireless networking, generative AI, and topological data analysis to build resilient and high-performance networked applications.
              </p>
              <div className="flex justify-center md:justify-start space-x-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <SocialIcon name={link.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-20">
          <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{userBio}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Research Interests</h3>
              <ul className="flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <li
                    key={interest}
                    className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-colors cursor-default"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16 md:py-20">
          <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">Experience</h2>
          <div className="space-y-4">
            {experienceData.map((exp, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">{exp.duration}</span>
                </div>
                <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mb-3">
                  {exp.company} · {exp.location}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-16 md:py-20">
          <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">Education</h2>
          <div className="space-y-4">
            {educationData.map((ed, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2 gap-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{ed.degree}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-mono">{ed.duration}</span>
                </div>
                <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mb-3">
                  {ed.institution} · {ed.location}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{ed.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="publications" className="py-16 md:py-20">
          <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">Publications</h2>
          <div className="space-y-5">
            {publicationsData.map((pub, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-xl hover:-translate-y-1 hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">{pub.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {pub.authors.join(', ')}
                </p>
                <p className="text-sm italic text-slate-500 dark:text-slate-400 mb-3">{pub.venue}, {pub.year}</p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(pub.links).map(([label, url]) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-900/70 transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16 md:py-20">
          <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projectsData.map((p, i) => (
              <article
                key={i}
                className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-xl hover:-translate-y-2 hover:border-sky-400 dark:hover:border-sky-500 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="extracurriculars" className="py-16 md:py-20">
          <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">Extracurricular Activities</h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc list-inside">
            {activitiesData.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="py-16 md:py-20">
          <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">Get In Touch</h2>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
              I'm always open to discussing new research, collaborations, or opportunities. Please feel free to get in touch via email or connect with me online.
            </p>
            <a
              href="mailto:rbhusal2@unl.edu"
              className="font-mono text-lg text-sky-600 dark:text-sky-400 hover:underline"
            >
              rbhusal2@unl.edu
            </a>
            <div className="flex justify-center space-x-6 mt-12">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  <SocialIcon name={link.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 py-6 text-center text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Rohit Bhusal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
