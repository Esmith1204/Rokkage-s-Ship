import rokkage31 from "../../assets/Rokkage31_Bot.png";
import zothacks from "../../assets/zothacks_background.png";
import { Link } from "react-router-dom";

export default function Work() {
    return (
        <div className="hero bg-base-200 min-h-screen py-12">
            <div className="hero-content flex-col w-full">
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-5xl font-bold text-center">My Work</h1>
                    <p className="py-6 text-center">
                        Below is a list of my projects and designs I've worked on!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        {/*Copy and paste attribute for future projects replacing href and src*/}
                        <a
                            href="https://github.com/Esmith1204/Rokkage31"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card bg-base-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                            aria-label="Open Rokkage31 project on GitHub"
                        >
                            <figure className="h-48 w-full overflow-hidden bg-neutral">
                                <img
                                    src={rokkage31}
                                    alt="Rokkage31 project screenshot"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Rokkage31</h2>
                                <p className="text-sm">A Discord bot I built for ICS 31</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">View on GitHub</button>
                                </div>
                            </div>
                        </a>

                        <Link
                            to="/designs"
                            className="card bg-base-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden"
                            aria-label="Open Designs Gallery"
                        >
                            <figure className="h-48 w-full overflow-hidden bg-neutral">
                                <img
                                    src={zothacks}
                                    alt="Rokkage31 project screenshot"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Designs</h2>
                                <p className="text-sm">A collection of my design work and art.</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Designs Gallery</button>
                                </div>
                            </div>
                        </Link>

                        <div className="card bg-base-100 shadow-lg opacity-80">
                            <div className="h-48 bg-neutral flex items-center justify-center text-white"></div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Coming Soon</h2>
                                <p className="text-sm"></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}