let Peer = require('simple-peer')
const socket = require("../../socket/connection")

export async function activateWebcam(){
  const $video = document.querySelector('.webcam__video');
  const constraints = {
    audio: false,
    video: getWindowDimensions()
  };
   // Een object creeren die de webcam gebruikt met de opgelegde constraints
   const stream = await navigator.mediaDevices.getUserMedia(constraints);
   //De video tag in html gaat de stream van de webcam als videoclip gebruiken
   $video.srcObject = stream;
   $video.onloadedmetadata = () => $video.play();
}

const getWindowDimensions = () => {
  const width = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );

  const height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );

  return { width, height };
};

