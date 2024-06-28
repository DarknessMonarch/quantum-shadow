"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import NotFoundImage from "@/public/assets/404.png";
import styles from "@/app/style/notfound.module.css";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router]);

  return (
    <div className={styles.notFound}>
      <Image
        className={styles.notFoundImg}
        src={NotFoundImage}
        width={200}
        alt="Not found image"
        priority
      />
      <h1>
        Press <div className={styles.logoA}>ESC</div> to go back
      </h1>
      <button className={styles.backButton} onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
}
