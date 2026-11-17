import React, { useState } from "react";

// Shows the image if the file exists in /public, otherwise a neutral placeholder.
const Photo = ({ src, alt, className = "" }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-600 text-xs ${className}`}
        role="img"
        aria-label={alt}
      >
        Photo coming soon
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

export default Photo;
