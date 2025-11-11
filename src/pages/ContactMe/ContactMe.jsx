import DarkVeil from '../../components/Background/background.jsx';

export default function ContactMe() {
    return (
        <div className="hero bg-base-200 min-h-screen" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Component */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil 
                    hueShift={20}
                    noiseIntensity={0.05}
                    scanlineIntensity={0.1}
                    speed={0.3}
                    scanlineFrequency={0.5}
                    warpAmount={0.3}
                />
            </div>
            <div className="hero-overlay" style={{ zIndex: 1 }}></div>

            <div className="hero-content flex-col lg:flex-row pt-20" style={{ position: 'relative', zIndex: 2 }}>
                <div className="rounded-xl border-2 border-base-300 p-8 bg-base-100 shadow-md">
                    <h1 className="text-5xl font-bold">Contact Me</h1>
                    <p className="py-6">Feel free to reach out to me via email or LinkedIn!</p>
                    <p className="py-0.5 underline">
                        <a href="mailto:elijahiya1204@gmail.com">elijahiya1204@gmail.com</a>
                    </p>
                    <p className="py-1 underline">
                        <a href="https://www.linkedin.com/in/elijah-smith-71319429a" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
}