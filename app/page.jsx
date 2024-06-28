"use client";
import "animate.css";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import styles from "@/app/style/home.module.css";
import logoName from "@/public/assets/logoName.png";
import {
  SpeakerWaveIcon as PlayIcon,
  SpeakerXMarkIcon as StopIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  const data = [
    { image: "/assets/bg1.png" },
    { image: "/assets/bg2.png" },
    { image: "/assets/bg3.png" },
    { image: "/assets/bg4.png" },
    { image: "/assets/bg5.png" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const startGame = () => {
    router.push("page/dashboard");

  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "a" || event.key === "A") {
        router.push("page/dashboard");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  useEffect(() => {
    audioRef.current = new Audio("/assets/soundtrack.mp3");
    audioRef.current.loop = true;

    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        toast.error("Audio blocked. Click play icon");
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          toast.error("Error playing audio. Please try again.");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div className={styles.splashContainer}>
      <div className={styles.splashWrapper}>
        <Image
          className={styles.splashImage}
          src={data[currentImageIndex].image}
          alt="backdrop Image"
          fill
          quality={100}
          priority
        />
      </div>

      <div className={styles.logoNameContainer}>
        <Image
          className={`${styles.logoName} animate__animated animate__rotateInDownLeft`}
          src={logoName}
          alt="logo Name"
          width={500}
          priority
        />
        <h1>
          Press <div className={styles.logoA}>A</div> to start
        </h1>
        <button onClick={startGame} className={styles.startBtn}>
          Start
        </button>

        <button onClick={toggleAudio} className={styles.audioButton}>
          {isPlaying ? (
            <PlayIcon className={styles.controllerIcon} height={20} />
          ) : (
            <StopIcon className={styles.controllerIcon} height={20} />
          )}
        </button>
        <div className={styles.logoFooter}>
          <h2> &copy; 2024. Quantum Shadow. All rights reserved</h2>
        </div>
      </div>
    </div>
  );
}
