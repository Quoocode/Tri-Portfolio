import { useEffect } from 'react';

export default function LightboxOverlay({ isOpen, src, cap, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="overlay"
      className="open show-image"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <button
        type="button"
        className="ov-close"
        aria-label="Close image preview"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ×
      </button>

      <figure
        className="ov-media"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="ov-img"
          src={src}
          alt={cap || 'Preview'}
          draggable="false"
        />

        {cap && (
          <figcaption className="ov-cap">
            {cap}
          </figcaption>
        )}
      </figure>
    </div>
  );
}