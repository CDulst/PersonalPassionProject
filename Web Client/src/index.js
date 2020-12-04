import {Loading,Name,Code,Connected,IntroAnimation} from "./js modules/connecting/states";
import {NeutralScreen,StartAnimation} from "./js modules/gamescreen/states";
import {connection} from "./js modules/socket/connection";
import './index.css';
export function GameStart(){
  connection();
  StartAnimation();
  setTimeout (NeutralScreen,1000);
}

{
  const init = () => {
   ConnectingStart();
  }

  const ConnectingStart = () => {
    connection();
    IntroAnimation();
    setTimeout(Loading, 3000);
    setTimeout(Code, 6000);
  }


  init();
}
