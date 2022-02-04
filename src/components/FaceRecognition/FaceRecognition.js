import React from "react";
import "./FaceRecognition.css";
import "../DetectionBox/DetectionBox";
import DetectionBox from "../DetectionBox/DetectionBox";

const FaceRecognition = ({ imageUrl, boxes }) => {
    // console.log("boxes: ", boxes);

    const detectionBoxes = boxes.map((box) => {
        return <DetectionBox key={box.id} box={box}></DetectionBox>;
    });

    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img
                    id="inputimage"
                    alt=""
                    src={imageUrl}
                    width="500px"
                    heigh="auto"
                />
                {detectionBoxes}
            </div>
        </div>
    );
};

export default FaceRecognition;
