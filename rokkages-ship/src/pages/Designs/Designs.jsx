import lamp from "../../assets/Lamp.png";
import mfdoom from "../../assets/mfdoom.png";
import resumeworkshop from "../../assets/Resume_Workshop.png";
import socaldrop from "../../assets/Socal_Drop.png";
import yoyomeetup from "../../assets/yoyo_meetup.png";
import zothacks from "../../assets/zothacks_background.png";

export default function Designs() {
    return (
        <div className="hero bg-base-200 min-h-screen py-12">
            <div className="hero-content flex-col w-full"> 
                <div className="w-full max-w-6xl mx-auto">

                    <h1 className="text-5xl font-bold text-center">My Designs</h1>
                    <p className="py-6 text-center">
                        Some designs and art I've worked on in the past. Going to add some more in the future :)
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        {/*Copy and paste attribute for future projects replacing href and src*/}

                        {/*MF DOOM Drawing*/}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card bg-base-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden flex justify-center"
                            aria-label="MF DOOM Drawing"
                        >
                            <figure className="flex items-center justify-center p-4">
                                <img
                                    src={mfdoom}
                                    alt="MF DOOM design"
                                    className="block"
                                    style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "400px" }}
                                />
                            </figure>
                        </a>

                        {/*ZotHacks Background*/}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card bg-base-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden flex justify-center"
                            aria-label="Zothacks Background"
                        >
                            <figure className="flex items-center justify-center p-4">
                                <img
                                    src={zothacks}
                                    alt="Zothacks Background"
                                    className="block"
                                    style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "400px" }}
                                />
                            </figure>
                        </a>

                        {/*Socal Drop Graphic*/}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card bg-base-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden flex justify-center"
                            aria-label="Socal Drop Graphic"
                        >
                            <figure className="flex items-center justify-center p-4">
                                <img
                                    src={socaldrop}
                                    alt="Socal Drop Graphic"
                                    className="block"
                                    style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "400px" }}
                                />
                            </figure>
                        </a>

                        {/*Yoyo Meetup Graphic*/}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card bg-base-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden flex justify-center"
                            aria-label="Yoyo Meetup Graphic"
                        >
                            <figure className="flex items-center justify-center p-4">
                                <img
                                    src={yoyomeetup}
                                    alt="Yoyo Meetup Graphic"
                                    className="block"
                                    style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "400px" }}
                                />
                            </figure>
                        </a>
                        
                        {/*Resume Workshop Graphic*/}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card bg-base-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden flex justify-center"
                            aria-label="Resume Workshop Graphic"
                        >
                            <figure className="flex items-center justify-center p-4">
                                <img
                                    src={resumeworkshop}
                                    alt="Resume Workshop Graphic"
                                    className="block"
                                    style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "400px" }}
                                />
                            </figure>
                        </a>

                        {/*Lamp Graphic*/}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card bg-base-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 overflow-hidden flex justify-center"
                            aria-label="Lamp Graphic"
                        >
                            <figure className="flex items-center justify-center p-4">
                                <img
                                    src={lamp}
                                    alt="Lamp Graphic"
                                    className="block"
                                    style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "400px" }}
                                />
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}