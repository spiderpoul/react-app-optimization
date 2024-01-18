import React, { useEffect, useState, useCallback, useRef } from "react";
import { LibraryItemModel, MediaType } from "../types";
import styled from "styled-components";
import ZoomableImage from "./ZoomableImage";

const Container = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(25, 27, 26, 0.1),
    0 1px 8px 0 rgba(25, 27, 26, 0.08);
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 18px;
  margin: 18px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 16px;
  margin: 18px;
  word-break: break-word;
`;

const VideoContainer = styled.video`
  width: 100%;
  height: 208px;
  outline: none;
`;

interface LibraryItemProps {
  item: LibraryItemModel;
}

const LibraryItem: React.FC<LibraryItemProps> = ({ item }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [clickedOnVideo, setClickedOnVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = item.data[0].media_type === MediaType.video;

  useEffect(() => {
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
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isVideo ? (
        <VideoContainer ref={videoRef} controls muted>
          {videoUrl && <source src={videoUrl} type="video/mp4" />}
        </VideoContainer>
      ) : (
        imagePreview && <ZoomableImage src={imagePreview} height={300} />
      )}
      <Title>{item.data[0]?.title}</Title>
      <Description>{item.data[0]?.description}</Description>
    </Container>
  );
};

export default LibraryItem;
