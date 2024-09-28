import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './CardGridPlaceholder.module.scss'

interface CardGridPlaceholderProps {}

const CardGridPlaceholder: React.FC<CardGridPlaceholderProps> = () => {
    return (
        <div className={styles.container}>
            <ContentLoader
                speed={2}
                width={375}
                height={475}
                viewBox="0 0 375 475"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="375" height="300" />
                <rect x="18" y="320" rx="0" ry="0" width="120" height="18" />
                <rect x="18" y="355" rx="0" ry="0" width="335" height="18" />
                <rect x="18" y="380" rx="0" ry="0" width="335" height="18" />
                <rect x="18" y="405" rx="0" ry="0" width="335" height="18" />
                <rect x="18" y="430" rx="0" ry="0" width="306" height="18" />
            </ContentLoader>
        </div>
    );
};

export default CardGridPlaceholder;
