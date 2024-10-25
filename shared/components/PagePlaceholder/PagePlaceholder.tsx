import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./PagePlaceholder.module.scss";

interface CardGridPlaceholderProps {}

const PagePlaceholder: React.FC<CardGridPlaceholderProps> = () => {
  return (
    <div className={styles.container}>
      <ContentLoader
        speed={2}
        width={"90%"}
        viewBox="0 0 375 475"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="375" height="250" />
        <rect x="0" y="260" rx="0" ry="0" width="120" height="15" />
        <rect x="0" y="280" rx="0" ry="0" width="375" height="15" />
        <rect x="0" y="300" rx="0" ry="0" width="375" height="15" />
        <rect x="0" y="320" rx="0" ry="0" width="375" height="15" />
        <rect x="0" y="340" rx="0" ry="0" width="375" height="15" />
      </ContentLoader>
    </div>
  );
};

export default PagePlaceholder;
