import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { useRef } from "react";

function WebCam() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  // const webRef = useRef(null);
  // const [img, setImg] = useState("");
  // function showImage () {
  //     let getImg = webRef.current.getScreenshot();
  //     setImg(getImg);
  // };

  return (
    // <div>
    //   Webcam
    //   <Webcam ref={webRef} />
    //   <button onClick={showImage}>Show Image in Console</button>
    //   {img && <img src={img} alt="Image" />}
    // </div>
    <>
      <div className="flex flex-col min-h-screen p-6">
        <div className="flex">
          <span>
            <img src="src\images\register_logo.png" alt="RegisterLogo" />
          </span>
          <hr className="flex-grow border-t mt-16 mr-16 border-[#41A7C8]" />
        </div>
        <div
          className="flex flex-col items-center w-full h-auto 
                      bg-sky-100 mt-6"
        >
          <h4 className="font-bold mt-2">Mark Your Attendance</h4>
          <div className="flex flex-row justify-between w-full">
            <p className="ml-14">
              <span className="text-[#E50000]">Time:</span>{" "}
              {currentTime.toLocaleTimeString()}
            </p>
            <p className="mr-14">
              <span className="text-[#E50000]">Date:</span>{" "}
              {currentTime.toLocaleDateString()}
            </p>
          </div>
          <div
            className="flex items-center justify-around mt-8
                           w-full p-4"
          >
            <div
              className="w-[400px] h-[400px] bg-[#41A7C8] rounded-lg
                             flex flex-col items-center justify-center"
            >
              <div className="bg-[#000000] w-60 h-60 rounded-full overflow-hidden">
                <Webcam
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <button
                className="mt-6 rounded-lg w-28 bg-[#0B8900]
                                 text-[#ffffff] font-bold"
              >
                Mark
              </button>
              <p className="mt-2 text-[#E50000]">
                Please follow the given Instruction
              </p>
            </div>
            <div className="w-[650px] h-[631px] bg-[#ffffff] rounded-lg">
              <div className="p-1">
                <h2 className="font-bold underline">
                  Barcode Scanning Instructions
                </h2>
                <div className="mt-2">
                  <ol className="list-decimal list-inside font-medium">
                    <li>
                      Get Ready:
                      <ul className="list-disc list-inside ml-2 font-light">
                        <li>
                          Hold Your Barcode: Ensure your barcode e.g., ID card
                          is in your hand and ready for scanning.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Position the Barcode:
                      <ul className="list-disc list-inside ml-2 font-light">
                        <li>
                          Align Clearly: Place the barcode within the designated
                          area on the screen.
                        </li>
                        <li>
                          Face the Webcam: Position your barcode in front of
                          your webcam, ensuring it's well-lit and visible.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Scan Your Barcode:
                      <ul className="list-disc list-inside ml-2 font-light">
                        <li>
                          Hold Steady: Keep the barcode steady in front of the
                          webcam.
                        </li>
                        <li>
                          Wait for Confirmation: Wait for the system to confirm
                          the successful scan.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Troubleshooting Tips:
                      <ul className="list-disc list-inside ml-2 font-light">
                        <li>
                          If the scan fails, check for proper lighting and
                          obstructions.
                        </li>
                        <li>Ensure the barcode is not damaged or obscured.</li>
                      </ul>
                    </li>
                    <li>
                      Privacy and Security:
                      <ul className="list-disc list-inside ml-2 font-light">
                        <li>
                          Protect Your Barcode: Keep your barcode secure and
                          private. Do not share it with others.
                        </li>
                        <li>
                          Logout After Scan: Always log out after completing
                          attendance to ensure privacy.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Need Help?
                      <ul className="list-disc list-inside ml-2 font-light">
                        <li>
                          Technical Support: If you encounter issues or have
                          questions, contact our technical support team for
                          assistance.
                        </li>
                        <li>
                          Lost or Stolen Barcode: Report lost or stolen barcode
                          cards to your organization immediately.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Important Note:
                      <ul className="list-disc list-inside ml-2 font-light">
                        <li>
                          Follow any additional guidelines provided by your
                          organization for using the attendance portal.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebCam;
