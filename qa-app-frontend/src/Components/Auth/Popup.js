import React from "react";
import './Popup.css';

const Popup = ({ children, closePopup }) => {
    return (
        <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Popup;
