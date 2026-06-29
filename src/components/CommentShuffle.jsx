import { useState } from 'react';
import { COMMENTS } from '../data/comment.js';

const COMMENT_COUNT = 6;

function pickRandomComments() {
  if (!COMMENTS.length) return [];

  return Array.from({ length: COMMENT_COUNT }, () => {
    const randomIndex = Math.floor(Math.random() * COMMENTS.length);
    return COMMENTS[randomIndex];
  });
}

export default function CommentShuffle() {
  const [visibleComments, setVisibleComments] = useState(() => pickRandomComments());

  const handleShuffle = () => {
    setVisibleComments(pickRandomComments());
  };

  const handleCommentClick = (videoUrl) => {
    if (!videoUrl) return;
    window.open(videoUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="board comment-board reveal">
      <div className="board__hd comment-board__hd">
        <div>
          Tap a comment — real reactions
          <span className="tag">from videos people actually watched</span>
        </div>

        <button
          type="button"
          className="comment-shuffle-btn"
          onClick={handleShuffle}
        >
          shuffle comments
        </button>
      </div>

      <div className="comment-list">
        {visibleComments.map((comment, index) => (
          <button
            type="button"
            className="comment-card"
            key={`${comment.id}-${index}`}
            onClick={() => handleCommentClick(comment.videoUrl)}
          >
            <div className="comment-card__media">
              <img
                src={comment.image}
                alt={`TikTok comment ${comment.id}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.classList.add('is-missing');
                }}
              />
            </div>

            <span className="comment-card__arrow" aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}