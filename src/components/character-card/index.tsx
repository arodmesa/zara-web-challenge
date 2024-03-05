import styles from "./character-card.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeartIcon } from "@/assets/icons/solid/icons";

type CharacterCardProps = {
  id: number;
  name: string;
  imageUrl: string;
};

export default function CharacterCard({
  id,
  name,
  imageUrl,
}: CharacterCardProps) {
  const variants = {
    default: { height: "0.375rem" },
    hovered: { height: "100%" },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={imageUrl} alt={name} width={300} height={300} />
      <div className={styles.infoContainer}>
        <motion.span
          className={styles.motionSpan}
          variants={variants}
          transition={{ duration: 0.5 }}
        />
        <div className={styles.row}>
          <span>{name}</span>
          <HeartIcon className={styles.heartIcon} />
        </div>
      </div>
    </motion.div>
  );
}
