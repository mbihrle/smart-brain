import React from "react";
import "./DetectionBox.css";

const DetectionBox = ({ box }) => {
    return (
        <div
            className="bounding-box"
            style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
            }}
        ></div>
    );
};

export default DetectionBox;
