import React from 'react';
import './popup.css';

const Popup = ({
  isPopupOpen,
  closePopup,
  newPostContent,
  addNewPost,
  handleTextareaChange,
  isMessage,
}) => {
  return (
    <div
      className={isPopupOpen ? 'bg-overlay active' : 'bg-overlay'}
      onClick={(e) => closePopup(e)}
    >
      <div
        className={isPopupOpen ? 'popup-container open' : 'popup-container'}
      >
        <div className="button-container">
          <div className="close-button" id="popup-close-btn">
            <span className="line" />
            <span className="line" />
          </div>
        </div>

        <textarea
          className="popup-content"
          rows="18"
          cols="38"
          value={newPostContent}
          onChange={(e) => handleTextareaChange(e)}
        />

        {isMessage && (
          <div className="success-message">New post is successfully added!</div>
        )}

        <button className="submit-btn" type="button" onClick={addNewPost}>
          Create New Post
        </button>
      </div>
    </div>
  );
};

export default Popup;
