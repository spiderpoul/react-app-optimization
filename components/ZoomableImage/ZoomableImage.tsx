import React, { useRef, useCallback } from "react";
import styles from "./ZoomableImage.module.scss";

interface ZoomableImageProps {
  height: number;
  width?: number;
  src: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  height,
  width,
  src,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const refImage = useRef<HTMLImageElement>(null);
  const refOffset = useRef({
    left: 0,
    top: 0,
  });

  const onMouseEnter = useCallback(() => {
    refOffset.current = {
      left: ref.current?.getBoundingClientRect().left || 0,
      top: ref.current?.getBoundingClientRect().top || 0,
    };
  }, []);

  const onMouseLeave = useCallback(() => {
    if (refImage.current) {
      refImage.current.style.transformOrigin = ``;
      refImage.current.style.transform = "none";
    }
  }, []);

  const onMouseMove = useCallback((e) => {
    const mouseCoords = {
      x: e.clientX,
      y: e.clientY,
    };

    var counter = 0;
    var updateRate = 1;
    var isTimeToUpdate = function () {
      return counter++ % updateRate === 0;
    };

    if (
      isTimeToUpdate() &&
      refImage.current &&
      (refOffset.current.left || refOffset.current.top)
    ) {
      const originCoords = {
        x: mouseCoords.x - refOffset.current.left,
        y: mouseCoords.y - refOffset.current.top,
      };
      if (originCoords.x || originCoords.y) {
        refImage.current.style.transformOrigin = `${originCoords.x}px ${originCoords.y}px`;
        refImage.current.style.transform = "scale(1.5)";
      }
    }
  }, []);

  return (
    <div
      className={styles.ImageContainer}
      style={{
        width: width ? `${width}px` : "100%",
        height: `${height}px`
      }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img className={styles.ImageItem} src={src} ref={refImage} />
    </div>
  );
};

export default ZoomableImage;
