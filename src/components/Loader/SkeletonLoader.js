import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = (props) => (
  <div className="tb">
    <ContentLoader
      speed={2}
      width="100%"
      height={250}
      backgroundColor="#fff"
      foregroundColor="#ecebee"
      {...props}
    >
      <rect x="0" y="0" rx="20" ry="20" width="100%" height="75%" />
      <rect x="8%" y="80%" rx="0" ry="20" width="45%" height="5%" />
      <rect x="8%" y="87%" rx="0" ry="20" width="80%" height="8%" />
      <rect x="8%" y="96%" rx="0" ry="20" width="55%" height="7%" />
    </ContentLoader>
  </div>
);

export default SkeletonLoader;
