import React from 'react';
import DarkVeil from '../../components/Background/background.jsx';
import ChromaGrid from './ChromaCard.jsx';
import PFP from '../../assets/Rokkage\'s Ship PFP.jpg';
import GitHub from '../../assets/GitHub.svg';
import Instagram from '../../assets/Instagram.svg';
import LinkedIn from '../../assets/LinkedIn.svg';

export default function ContactMe() {
    const cardContent = (
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 p-8 w-full h-full text-white">
            {/* Left Column: Picture & Description */}
            <div className="flex flex-col items-center md:items-start gap-6 max-w-[250px]">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <img 
                        src={PFP} 
                        alt="Elijah" 
                        className="relative w-48 h-48 rounded-xl object-cover shadow-2xl border-2 border-white/10" 
                    />
                </div>
                
                <div className="text-sm leading-relaxed text-gray-300 font-light">
                    <p>
                        I believe that great design is born at the intersection of creativity and logic. 
                        My process involves deep user empathy, iterative prototyping, and a relentless pursuit of pixel-perfect implementation.
                    </p>
                </div>
            </div>
            
            {/* Right Column: Name & Contact */}
            <div className="flex flex-col justify-center gap-6">
                <div className="space-y-2">
                    <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Elijah Smith
                    </h2>
                    <p className="text-xl text-gray-400 font-light tracking-wide">
                        Full Stack Developer & Designer
                    </p>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-2"></div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                        <span className="text-sm font-mono">EMAIL</span>
                        <a href="mailto:elijahiya1204@gmail.com" className="hover:underline decoration-pink-500 underline-offset-4">
                            elijahiya1204@gmail.com
                        </a>
                    </div>
                    
                    <div className="flex gap-5 mt-4">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="group relative p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:-translate-y-1">
                            <img src={Instagram} alt="Instagram" className="w-6 h-6 opacity-90 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="https://www.linkedin.com/in/elijah-smith-71319429a" target="_blank" rel="noopener noreferrer" className="group relative p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:-translate-y-1">
                            <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6 opacity-90 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="group relative p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:-translate-y-1">
                            <img src={GitHub} alt="GitHub" className="w-6 h-6 opacity-90 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    const items = [
        {
            content: cardContent,
            className: "w-full max-w-4xl bg-black/40 backdrop-blur-xl border-white/10", 
            borderColor: "rgba(56, 189, 248, 0.5)",
            gradient: "linear-gradient(145deg, rgba(56, 189, 248, 0.1) 0%, rgba(0,0,0,0.2) 100%)"
        }
    ];

    return (
        <div className="hero bg-base-200 min-h-screen" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Component */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil 
                    hueShift={20}
                    noiseIntensity={0.05}
                    scanlineIntensity={0.1}
                    speed={0.5}
                    scanlineFrequency={0.5}
                    warpAmount={0.3}
                />
            </div>
            <div className="hero-overlay" style={{ zIndex: 1 }}></div>

            {/* Lanyard hanging from the left side */}
            <div style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '40%', 
                height: '100%', 
                zIndex: 2,
                pointerEvents: 'all'
            }}>
                {/* Lanyard component was missing import, commenting out to prevent build error. Uncomment if available. */}
                {/* <Lanyard 
                    position={[-5, 0, 30]} 
                    gravity={[0, -40, 0]} 
                    fov={20}
                    transparent={true}
                /> */}
            </div>

            <div className="hero-content flex-col lg:flex-row pt-20 w-full justify-center px-4" style={{ position: 'relative', zIndex: 3 }}>
                <ChromaGrid items={items} />
            </div>
        </div>
    );
}