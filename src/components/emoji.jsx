import React, { useState } from "react";

const EmojiTracker = () => {
  const [selectedEmoji, setEmoji] = useState("");

  const [isClicked, setIsClicked] = useState(false);
  const emojis = ['😀', '😐', '😔'];

  const handleEmojiClick = (emoji) => {
    setEmoji(emoji);
    setIsClicked(true);
  };

  return (
    <>
      <div>
        
        {!isClicked ? (
          emojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => handleEmojiClick(emoji)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {emoji}
            </button>
          ))
        ) : (
          <p>I'm Feeling : {selectedEmoji} </p>
        )}
      </div>
    </>
  );
};

export default EmojiTracker;
