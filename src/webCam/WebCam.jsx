import React, { useState } from 'react'

import Webcam from 'react-webcam';
import { useRef } from 'react';

function WebCam() {
    const webRef = useRef(null);
    const [img, setImg] = useState("");
    function showImage () {
        let getImg = webRef.current.getScreenshot();
        setImg(getImg);
    };

  return (
    <div>
      Webcam
      <Webcam ref={webRef} />
      <button onClick={showImage}>Show Image in Console</button>
      {img && <img src={img} alt="Image" />}
    </div>
  )
}

export default WebCam
