import React, { useState } from 'react';
import Webcam from 'react-webcam';

export default function App() {
  const [webCamVisibility, setWebCamVisibility] = useState(true);
  const [image, setImage] = useState(null);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setWebCamVisibility(false);
    setImage(imageSrc);
    console.log(imageSrc);
  }, [webcamRef]);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };
  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            Trabalho Prático AJS
          </h1>
          <h4>
            <b>Prova de Conceito:</b> Biblioteca react-webcam
          </h4>
          <p>
            <b>Aluno:</b> Carlos Eduardo Ferreira Marins
          </p>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4 flex flex-row justify-center items-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="40%"
            videoConstraints={videoConstraints}
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded-full h-10 w-70"
            onClick={capture}
          >
            Capturar Foto
          </button>
          <img
            width="40%"
            alt="Image preview"
            src={image ? image : 'assets/img/no-preview.png'}
          />
        </div>
      </main>
    </div>
  );
}
