import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm z-50 relative">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Elijah's Ship
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="https://drive.google.com/file/d/1UlfsXEJaaEKoNEYPhtVddxRv0WwTTJgS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <details>
              <summary>Projects</summary>
              <ul className="bg-base-100 rounded-t-none p-2 absolute mt-2 shadow-lg">
                <li>
                  <a
                    href="https://github.com/Esmith1204/Rokkage31"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rokkage31
                  </a>
                </li>
                <li>
                  <a
                    href="/designs"
                  >
                    Designs
                  </a>
                </li>
                <li>
                  <Link to="/projects"> <strong>All Work</strong></Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
