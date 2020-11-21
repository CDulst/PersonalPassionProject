import {Loading,Name,Code,Connected,IntroAnimation} from "./js modules/connecting/states";
import {Webcam,StartAnimation} from "./js modules/home/states";
import {connection} from "./js modules/socket/connection";
{
  const init = () => {
   WebcamStart();
  }

  const ConnectingStart = () => {
    connection();
    setTimeout(Loading, 3000);
    setTimeout(Code, 6000);
  }

  const WebcamStart = () => {
    StartAnimation();
    setTimeout(Webcam,1000);
  }

  init();
}
