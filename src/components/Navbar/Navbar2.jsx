import { useState } from 'react';
import StaggeredMenu from './StaggeredMenu';
import logo from "../../assets/Portfolio_Logo.svg";

export default function Navbar2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [animating, setAnimating] = useState(false);

    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'Resume', ariaLabel: 'My resume', link: 'https://drive.google.com/file/d/1lt4lcx-85WM37cdsy8jBM3OvTI2T51N0/view?usp=drive_link' },
        { label: 'Projects', ariaLabel: 'View my projects', link: '#/projects' },
        { label: 'About', ariaLabel: 'Get in touch', link: '#/about' }
    ];

    const socialItems = [
        { label: 'Instagram', link: 'https://www.instagram.com/elijah._s' },
        { label: 'GitHub', link: 'https://github.com/Esmith1204' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/in/elijah-smith-71319429a' }
    ];

    const handleMenuOpen = () => {
        setMenuOpen(true);
        setAnimating(true);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
        setTimeout(() => setAnimating(false), 400);
    };

    const handleItemClick = () => {
        // Menu will close, keep wrapper full height during animation
        setAnimating(true);
        setTimeout(() => {
            setMenuOpen(false);
            setAnimating(false);
        }, 400);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[9999] ${
                menuOpen || animating ? 'h-[100vh]' : 'h-auto'
            } ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
            style={{ transition: 'none' }}
        >

            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#fff"
                openMenuButtonColor="#000000ff"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoUrl={logo}
                accentColor="#5227FF"
                onMenuOpen={handleMenuOpen}
                onMenuClose={handleMenuClose}
                onItemClick={handleItemClick}
            />
        </div>
    );
}
