import { useState } from 'react';

export default function FrameImage({
  src,
  alt,
  caption,
  onImageClick,
  onRatioLoad
}) {
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = (e) => {
    const img = e.currentTarget;
    const width = img.naturalWidth;
    const height = img.naturalHeight;

    if (width > 0 && height > 0 && onRatioLoad) {
      onRatioLoad(`${width} / ${height}`);
    }
  };

  const handleImageClick = (e) => {
    e.stopPropagation();

    if (onImageClick) {
      onImageClick(src, caption || alt || '');
    }
  };

  return (
    <>
      {!hasError ? (
        <img
          src={src}
          alt={alt || caption || ''}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={() => setHasError(true)}
          onClick={handleImageClick}
          draggable="false"
          style={{
            cursor: onImageClick ? 'zoom-in' : 'default',
            objectFit: 'cover',
            objectPosition: 'center',
            background: '#fff'
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            placeItems: 'center',
            background: '#eee',
            color: '#555',
            fontSize: '0.9rem',
            textAlign: 'center',
            padding: '1rem'
          }}
        >
          Image not found
        </div>
      )}

      {caption && <span>{caption}</span>}
    </>
  );
}