import Image from "next/image";
import styles from "./dropZone.module.css";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "@/ui/button";
import SuccessIcon from "@/ui/icons/success";
import ErrorIcon from "@/ui/icons/error";
import upload from "@/utils/upload";

const DropzoneField = () => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [approved, setApproved] = useState<number | null>(null);
  const [isOpenStatusMessage, setOpenStatusMessage] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length < 1) return;
    setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  const handleUpload = async () => {
    const response = await upload(file);
    setApproved(response ? response.approved : null);
    setFileUrl(null);
    setOpenStatusMessage(true);
  };

  return (
    <section className={styles.mainContainer}>
      <div
        {...getRootProps()}
        className={styles.dropzone}
        data-error={!approved && isOpenStatusMessage ? "error" : "success"}
      >
        <input {...getInputProps()} />
        {fileUrl ? (
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={fileUrl}
              alt=""
              fill
              priority
            ></Image>
          </div>
        ) : isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>
            {" "}
            <span>Drag here</span> your file or <span>Click here</span> to
            upload
          </p>
        )}
      </div>
      {fileUrl ? (
        <p className={styles.statusMessage}>Image File Name: {file?.name}</p>
      ) : (
        <p className={styles.statusMessage}>No file selected</p>
      )}
      {isOpenStatusMessage ? (
        approved === 1 ? (
          <div className={styles.status}>
            <SuccessIcon />
            <p className={styles.statusMessage}>
              Thanks for the Upload - Cat found!
            </p>
          </div>
        ) : (
          <div className={styles.status}>
            <ErrorIcon />
            <p className={styles.statusMessage}>
              No Cat found - try a different one
            </p>
          </div>
        )
      ) : null}
      {file ? (
        <Button className={styles.uploadButton} onClick={handleUpload}>
          Upload photo
        </Button>
      ) : null}
    </section>
  );
};

export default DropzoneField;
