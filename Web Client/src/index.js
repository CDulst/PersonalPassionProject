import {Loading,Name,Code,Connected} from "./js modules/connecting/states";
import {connection} from "./js modules/socket/connection";
{
  const init = () => {
   PlaceholderScript();
  }

  const PlaceholderScript = () => {
    connection();
    setTimeout(Loading, 3000);
    setTimeout(Code, 6000);
  }
  init();
}
