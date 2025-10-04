import myImage from "../../assets/grid.jpg";
import myProfilePic from "../../assets/Rokkage's Ship PFP.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${myImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <img
            className="mask mask-circle"
            src={myProfilePic}
            alt="Profile"
          />
          <h1 className="mb-5 text-5xl font-bold">Elijah's Ship</h1>
          <p className="mb-5">
            This is my personal portfolio.
          </p>
          <Link to="/projects">
            <button className="btn btn-primary">My Designs and Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}