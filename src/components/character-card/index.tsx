"use client";
import styles from "./character-card.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeartIcon, CutIcon } from "@/assets/icons/icons";
import { useState } from "react";

type CharacterCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  className?: string;
};

export default function CharacterCard({
  id,
  name,
  imageUrl,
  className,
}: CharacterCardProps) {
  const variants = {
    default: { height: "0.375rem" },
    hovered: { height: "100%" },
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`${styles.container} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={name} fill />
      </div>
      <div className={styles.infoContainer}>
        <CutIcon className={styles.cutIcon} />
        <motion.span
          className={styles.motionSpan}
          variants={variants}
          transition={{ duration: 0.3 }}
          animate={isHovered ? "hovered" : "default"}
        />
        <div className={styles.row}>
          <span className={styles.name}>{name}</span>
          <HeartIcon
            className={`${styles.heartIcon} ${
              isHovered ? styles.whiteColor : styles.redColor
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}
