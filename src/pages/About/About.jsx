import React from 'react';
import DarkVeil from '../../components/Background/background.jsx';
import ChromaGrid from './ChromaCard.jsx';
import PFP from '../../assets/portfolio_about_me.jpg';
import GitHub from '../../assets/GitHub.svg';
import Instagram from '../../assets/Instagram.svg';
import LinkedIn from '../../assets/LinkedIn.svg';

export default function About() {
    const cardContent = (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 w-full h-full text-white items-center">
            {/* Left Column: Visual Identity */}
            <div className="md:col-span-5 flex flex-col items-center md:items-start gap-6">
                <div className="relative group w-full max-w-[320px] aspect-[4/5] md:aspect-square mx-auto md:mx-0">
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-violet-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-700"></div>
                    <img 
                        src={PFP} 
                        alt="Elijah Smith" 
                        className="relative w-full h-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10" 
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs text-center font-mono text-indigo-300">DESIGN • DEVELOP • DEPLOY</p>
                    </div>
                </div>
            </div>
            
            {/* Right Column: Narrative & Action */}
            <div className="md:col-span-7 flex flex-col justify-center gap-8 text-center md:text-left">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 mx-auto md:mx-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        Open to Work
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                        Elijah<br/>
                        <span className="text-white">Smith</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light tracking-wide">
                        Designer & Frontend Developer
                    </p>
                </div>

                <div className="relative md:pl-6 md:border-l-2 border-white/10 py-2">
                    <p className="text-lg text-gray-300 leading-relaxed font-light">
                        <span className="text-indigo-400 text-2xl font-serif">"</span>
                        I believe that great design is created at the intersection of creativity and logic. 
                        My process involves deep user empathy, iterative prototyping, and the pursuit of perfecting implementation.
                        <span className="text-indigo-400 text-2xl font-serif">"</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 pt-2">
                    <a href="mailto:elijahiya1204@gmail.com" className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                            Email me
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                    </a>
                    
                    <div className="flex gap-4">
                        {[
                            { icon: Instagram, link: "https://www.instagram.com/elijah._s/", label: "Instagram" },
                            { icon: LinkedIn, link: "https://www.linkedin.com/in/elijah-smith-71319429a", label: "LinkedIn" },
                            { icon: GitHub, link: "https://github.com/Esmith1204", label: "GitHub" }
                        ].map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1 group"
                                aria-label={social.label}
                            >
                                <img src={social.icon} alt={social.label} className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const items = [
        {
            content: cardContent,
            className: "w-full max-w-4xl bg-black/40 backdrop-blur-xl border-white/10", 
            borderColor: "rgba(99, 102, 241, 0.5)",
            gradient: "linear-gradient(145deg, rgba(99, 102, 241, 0.1) 0%, rgba(0,0,0,0.2) 100%)"
        }
    ];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Component */}
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <DarkVeil 
                    hueShift={20}
                    noiseIntensity={0.05}
                    scanlineIntensity={0.1}
                    speed={0.5}
                    scanlineFrequency={0.5}
                    warpAmount={0.3}
                />
            </div>
            
            <div className="flex justify-center pt-24 pb-12 px-4 relative z-10">
                <ChromaGrid items={items} />
            </div>
        </div>
    );
}