import React from "react";
import './Certifications.css'; // Import the CSS file


const Certifications = () => {
    return (
        <div className="certifications-container">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                <div className="certification-item">
                    <img src="src/Components/certifications/photo1.png" alt="Certification 1" />
                    <p>Certification Name 1</p>
                </div>
                <div className="certification-item">
                    <img src="./photo2.png" alt="Certification 2" />
                    <p>Certification Name 2</p>
                </div>
                <div className="certification-item">
                    <img src="./photo3.png" alt="Certification 3" />
                    <p>Certification Name 3</p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
