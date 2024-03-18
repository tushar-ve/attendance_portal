# Task

1. A Calendar Where the User can see its login Time and if he/she logged out then the logout time as well 

2. According to the time it should be able to show PR/AB

3. In the Backend we should be able to save their shift timing as well
  






import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';

function WebCam() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scanResult, setScanResult] = useState(null);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    if (!scanning) {
      
      // Stop scanning
      return;
    }

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(onScanSuccess, onScanError);

    return () => {
      scanner.clear();
    };
  }, [scanning]);

  const onScanSuccess = (result) => {
    if (!result) {
      console.warn('QR code scan result is empty or invalid.');
      return;
    }

    setScanResult(result);
    setScanning(false);

    // Additional code after successful scan
    fetch('http://127.0.0.1:8000/api/scan/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ qrCode: result }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to verify QR code');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Handle the data as needed, e.g., show a success message
      })
      .catch(error => {
        console.error('Error verifying QR code:', error);
        // Handle the error, e.g., show an error message
      });
  };


  const onScanError = (error) => {
    console.error('QR code scan error:', error);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const delay = 5000; // Adjust the delay time (in milliseconds) as needed

    const timeoutId = setTimeout(() => {
      setScanning(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen p-6">
        <div className="flex">
          <span>
            <img src="src\images\register_logo.png" alt="RegisterLogo" />
          </span>
          <hr className="flex-grow border-t mt-16 mr-16 border-[#41A7C8]" />
        </div>
        <div className="flex flex-col items-center w-full h-auto bg-sky-100 mt-6">
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
          <div className="flex items-center justify-around mt-8 w-full p-4">
            <div className="relative">
              <div className="w-[400px] h-[400px] bg-[#41A7C8] rounded-lg flex flex-col items-center justify-center">
                <div className="bg-[#000000] w-60 h-60 rounded-full overflow-hidden">

                  {scanning ? (
                    <div id="reader"></div>
                  ) : null}
                </div>
                <button className="mt-6 rounded-lg w-28 bg-[#0B8900] text-[#ffffff] font-bold">Mark</button>
                {scanResult ? (
                  <div className="absolute inset-x-0 bottom-0 bg-white p-2">
                    Success: <a>{scanResult}</a>
                  </div>
                ) : null}
                <p className="mt-2 text-[#E50000]">Please follow the given Instruction</p>
              </div>
            </div>
            <div className="w-[650px] h-[631px] bg-[#ffffff] rounded-lg">
              <div className="p-1">
                <h2 className="font-bold underline">Barcode Scanning Instructions</h2>
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




