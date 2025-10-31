import { useState } from 'react';
import StaggeredMenu from './StaggeredMenu';
import logo from "../../assets/Portfolio_Logo.svg";

export default function Navbar2() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
        { label: 'Resume', ariaLabel: 'My resume', link: 'https://drive.google.com/file/d/1UlfsXEJaaEKoNEYPhtVddxRv0WwTTJgS/view?usp=sharing' },
        { label: 'Projects', ariaLabel: 'View my projects', link: '#/projects' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '#/contact' }
    ];

    const socialItems = [
        { label: 'Instagram', link: 'https://www.instagram.com/elijah._s' },
        { label: 'GitHub', link: 'https://github.com/Esmith1204' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/in/elijah-smith-71319429a' }
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[9999] h-[100vh] overflow-visible transition-all duration-300 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
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
                onMenuOpen={() => setMenuOpen(true)}
                onMenuClose={() => setMenuOpen(false)}
                onItemClick={() => setMenuOpen(false)}
            />
        </div>
    );
}
