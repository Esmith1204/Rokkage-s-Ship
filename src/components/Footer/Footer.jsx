import linkedin from "../../assets/LinkedIn.svg";
import github from "../../assets/GitHub.svg";
import instagram from "../../assets/Instagram.svg";
import logo from "../../assets/Portfolio_Logo.svg";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <img
          src={logo}
          alt="Portfolio Logo"
          width={50}
          height={50}
          className="mb-2"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", fill:'#ffffffff' }} 
        />
        <p>
          © 2025 Elijah Smith. All rights reserved.
          <br />
          Made with a Rockstar Zero: Silver Ice energy drink
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Socials</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/elijah-smith-71319429a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" width={24} height={24} />
          </a>
          <a
            href="https://github.com/Esmith1204"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://www.instagram.com/elijah._s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
}
