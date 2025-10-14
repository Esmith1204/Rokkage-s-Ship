import myImage from "../../assets/Background.jpg";
import myProfilePic from "../../assets/Rokkage's Ship PFP.jpg";
import { motion } from "motion/react";

export default function Home() {
  const boxVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    
    <div
      className="flex flex-col min-h-screen items-center justify-center relative"
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
        }}
      ></div>

      <div className="hero-overlay bg-black opacity-30 absolute inset-0 z-10"></div>
      <motion.div
        className="relative text-neutral-content pt-16 px-4 md:px-1 lg:px-32 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        
        <span className="block text-base md:text-xl font-light tracking-widest uppercase">
          This is
        </span>

      </motion.div>
      <motion.div
        className="relative text-neutral-content px-4 md:px-1 lg:px-32 flex flex-col items-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-8xl lg:text-[10vw] font-black leading-none uppercase text-center break-words">
          Elijah's Ship
        </h1>
      </motion.div>

      <div className="h-8 md:h-15"></div>

      <motion.div
        className="hero-content relative text-neutral-content text-center flex justify-center items-center flex-1 pb-8 md:pb-16 z-20"
        variants={boxVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div
          className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-12"
          style={{
            outline: "3px solid #fff",
            outlineOffset: "12px",
            borderRadius: "24px",
            padding: "32px",
            background: "rgba(0,0,0,0.3)",
            minHeight: "350px",
            width: "90vw",
            maxWidth: "700px",
          }}
        >
          <div className="flex justify-center items-center w-full md:w-auto">
            <img
              className="mask mask-circle"
              src={myProfilePic}
              alt="Profile"
              style={{
                width: "12rem",
                height: "12rem",
                objectFit: "cover",
                maxWidth: "100%",
                aspectRatio: "1/1",
              }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center min-w-0">
            <p className="mb-8 text-lg md:text-2xl break-words text-center">A personal portfolio by Elijah.</p>
            <p className="mb-4 text-base md:text-lg break-words text-center max-w-md">
              Designer with an interest in UI/UX and web development. 
            </p>
            <a href="#/projects" className="w-full md:w-auto flex justify-center">
              <button className="btn btn-primary text-lg md:text-2xl px-10 py-4 md:px-14 md:py-6 mt-4 w-full md:w-auto">
                My Work
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}