import { useMemo } from 'react';
import lamp from "../../assets/Lamp.png";
import mfdoom from "../../assets/mfdoom.png";
import resumeworkshop from "../../assets/Resume_Workshop.png";
import socaldrop from "../../assets/Socal_Drop.png";
import yoyomeetup from "../../assets/yoyo_meetup.png";
import zothacks from "../../assets/zothacks_background.png";
import DarkVeil from "../../components/Background/background.jsx";
import Masonry from "../../components/Masonry/Masonry.jsx";

export default function Designs() {
    const designItems = [
        {
            id: 'mfdoom',
            img: mfdoom,
            height: 600, 
            url: '#',
        },
        {
            id: 'zothacks',
            img: zothacks,
            height: 800,
            url: '#',
        },
        {
            id: 'socaldrop',
            img: socaldrop,
            height: 700,
            url: '#',
        },
        {
            id: 'yoyomeetup',
            img: yoyomeetup,
            height: 850,
            url: '#',
        },
        {
            id: 'resumeworkshop',
            img: resumeworkshop,
            height: 750,
            url: '#',
        },
        {
            id: 'lamp',
            img: lamp,
            height: 600,
            url: '#',
        },
    ];

    // Dynamically calculates the minimum height needed for masonry layout
    const calculatedMinHeight = useMemo(() => {
        const columns = 5; 
        const gap = 16;
        const colHeights = new Array(columns).fill(0);
        
        designItems.forEach(item => {
            const minCol = colHeights.indexOf(Math.min(...colHeights));
            const height = item.height / 2; 
            colHeights[minCol] += height + gap;
        });
        
        return Math.max(...colHeights) + 5;
    }, [designItems]);

    return (
        <>
            {/* Background Component */}
            <div style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                zIndex: -1 
            }}>
                <DarkVeil 
                    hueShift={20}
                    noiseIntensity={0.05}
                    scanlineIntensity={0.1}
                    speed={0.5}
                    scanlineFrequency={0.5}
                    warpAmount={0.3}
                />
            </div>
            
            <div className="flex flex-col w-full py-20 pb-32" style={{ position: 'relative', zIndex: 0 }}>
                <div className="w-full max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-center mb-4">My Designs</h1>
                    <p className="py-6 text-center mb-8">
                        Some designs and art I've worked on in the past. Going to add some more in the future :)
                    </p>
                    
                    {/* Masonry Animation - Dynamically sized container */}
                    <div className="w-full" style={{ minHeight: `${calculatedMinHeight}px` }}>
                        <Masonry
                            items={designItems}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.05}
                            animateFrom="bottom"
                            scaleOnHover={true}
                            hoverScale={0.95}
                            blurToFocus={true}
                            colorShiftOnHover={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}