import {Loading,Name,Code,Connected} from "./js modules/connecting/states";

{
  const init = () => {
   PlaceholderScript();
  }

  const PlaceholderScript = () => {
    setTimeout(Loading, 3000);
    /*setTimeout(Code, 6000);
    setTimeout(Name, 9000);
    setTimeout(Connected, 12000);*/
  }
  init();
}
