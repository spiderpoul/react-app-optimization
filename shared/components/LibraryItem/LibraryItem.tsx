import React, { useEffect, useState, useCallback, useRef } from "react";
import { LibraryItemModel, MediaType } from "../../types";
import styles from "./LibraryItem.module.scss";
import ZoomableImage from "../ZoomableImage/ZoomableImage";

interface LibraryItemProps {
  item: LibraryItemModel;
}

const LibraryItem: React.FC<LibraryItemProps> = ({ item }) => {
  const [videoUrl, setVideoUrl] = React.useState("");
  const [clickedOnVideo, setClickedOnVideo] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = item.data[0].media_type === MediaType.video;

  React.useEffect(() => {
    if (isVideo) {
      const fetchData = async () => {
        const resData = await fetch(item.href);
        const res = await resData.json();
        const videoPreview = res?.find((x: string) => x.includes("~preview.mp4"));
        setVideoUrl(videoPreview);
      };

      fetchData();
    }
  }, [isVideo, item.data, item.href]);

  const imagePreview = item?.links?.find(
    (x) => x.render === MediaType.image
  )?.href;

  const onVolumeChange = () => setClickedOnVideo(true);

  const onMouseEnter = useCallback(() => {
    videoRef.current?.play();
    videoRef.current?.addEventListener("volumechange", onVolumeChange);
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!clickedOnVideo) {
      videoRef.current?.pause();
      videoRef.current?.removeEventListener("volumechange", onVolumeChange);
    }
  }, [clickedOnVideo]);

  return (
    <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isVideo ? (
        <video className={styles.videoContainer} ref={videoRef} controls muted>
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
        </video>
      ) : (
        imagePreview && <ZoomableImage src={imagePreview} height={300} />
      )}
      <div className={styles.title}>{item.data[0]?.title}</div>
      <div className={styles.description}>{item.data[0]?.description}</div>
    </div>
  );
};

export default LibraryItem;
