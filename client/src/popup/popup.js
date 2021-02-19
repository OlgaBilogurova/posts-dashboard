import React from 'react';
import './popup.css';

const Popup = ({
  isPopupOpen,
  closePopup,
  newPostContent,
  handleClickPopupBtn,
  handleTextareaChange,
  popupMessage,
  popupBtnName
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

        <div className="success-message">{popupMessage}</div>

        <button className="submit-btn" type="button" onClick={() => handleClickPopupBtn(popupBtnName)}>
          {popupBtnName}
        </button>
      </div>
    </div>
  );
};

export default Popup;
