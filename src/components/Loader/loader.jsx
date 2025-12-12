import { useState, useEffect } from 'react';
import { Bouncy } from 'ldrs/react';
import 'ldrs/react/Bouncy.css';

// Add all assests here when adding new assets. Put them under imagesToPreload array.
import background from '../../assets/Background.jpg';
import fullMetal from '../../assets/Fullmetal Alchemist.png';
import github from '../../assets/GitHub.svg';
import instagram from '../../assets/Instagram.svg';
import lamp from '../../assets/Lamp.png';
import linkedin from '../../assets/LinkedIn.svg';
import mfdoom from '../../assets/mfdoom.png';
import logo from '../../assets/Portfolio_Logo.svg';
import resumeWorkshop from '../../assets/Resume_Workshop.png';
import profilePic from "../../assets/Rokkage's Ship PFP.jpg";
import rokkage31 from '../../assets/Rokkage31_Bot.png';
import socialDrop from '../../assets/Socal_Drop.png';
import timely from '../../assets/Timely!! Design.png';
import tabapp from '../../assets/Untitled Tab App.png';
import yoyoMeetup from '../../assets/yoyo_meetup.png';
import zothacks from '../../assets/zothacks_background.png';

const Loader = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // List of all images to preload
    const imagesToPreload = [
      background,
      fullMetal,
      github,
      instagram,
      lamp,
      linkedin,
      mfdoom,
      logo,
      resumeWorkshop,
      profilePic,
      rokkage31,
      socialDrop,
      timely,
      tabapp,
      yoyoMeetup,
      zothacks,
    ];

    let loadedImages = 0;
    const totalImages = imagesToPreload.length;

    // Preload all images
    const preloadImages = imagesToPreload.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          setProgress(Math.round((loadedImages / totalImages) * 100));
          resolve();
        };
        img.onerror = reject;
      });
    });

    // Wait for all images to load
    Promise.all(preloadImages)
      .then(() => {
        // Add a small delay for smooth transition
        setTimeout(() => {
          setLoading(false);
          onLoadComplete();
        }, 500);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        // Still show the site even if some images fail to load
        setTimeout(() => {
          setLoading(false);
          onLoadComplete();
        }, 500);
      });
  }, [onLoadComplete]);

  if (!loading) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      <Bouncy size="45" speed="1.75" color="white" />
      <p
        style={{
          color: 'white',
          marginTop: '20px',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Loading... {progress}%
      </p>
    </div>
  );
};

export default Loader;