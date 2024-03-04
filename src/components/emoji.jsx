import React, { useState } from "react";

const EmojiTracker = () => {
  const [selectedEmoji, setEmoji] = useState("");

  const [isClicked, setIsClicked] = useState(false);
  const emojis = ['😀', '😐', '😔'];

  const handleEmojiClick = (emoji) => {
    setEmoji(emoji);
    setIsClicked(true);
    localStorage.setItem("emoji", emoji)
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
          <p style={{fontSize : "1.6rem", textTransform : "capitalize"}}>Current Mood :{selectedEmoji} </p>
          
        )}
      </div>
    </>
  );
};

export default EmojiTracker;
