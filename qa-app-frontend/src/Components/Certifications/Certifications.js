import React from "react";
import './Certifications.css';
import photo1 from './photo1.png'; // Import the image file
import photo2 from './photo2.png'; // Import the image file
import photo3 from './photo3.png'; // Import the image file
// Import the CSS file


const Certifications = () => {
    return (
        <div className="certifications-container">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                <div className="certification-item">
                    <img src={photo1} alt="Certification 1" />
                    <p>Certified Tester Foundation Level</p>
                </div>
                <div className="certification-item">
                    <img src={photo2} alt="Certification 2" id="emphasized-image" />
                    <p> Certified Tester Automotive Software Tester</p>
                </div>
                <div className="certification-item">
                    <img src={photo3} alt="Certification 3" />
                    <p>Certified Tester Advanced Level Agile Technical Tester</p>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
