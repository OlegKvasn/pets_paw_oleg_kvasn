import styles from "./photoUploadModal.module.css";
import IconButton from "@/ui/iconButton";
import CloseIcon from "@/ui/icons/close";
import DropzoneField from "./dropZone";
import Link from "next/link";

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhotoUploadModal = ({ isOpen, onClose }: PhotoUploadModalProps) => {
  return isOpen ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.topButtonContainer}>
          <IconButton onClick={onClose}>
            <CloseIcon height={18} />
          </IconButton>
        </div>
        <div className={styles.container}>
          <h1>Upload a .jpg or .png Cat Image</h1>
          <p>
            Any uploads must comply with the{" "}
            <Link href="https://thecatapi.com/privacy">upload guidelines </Link>
            or face deletion.
          </p>
          <DropzoneField />
        </div>
      </div>
    </div>
  ) : null;
};

export default PhotoUploadModal;
