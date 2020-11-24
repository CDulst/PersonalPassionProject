let $content = document.querySelector(".body");
const socket = require("../socket/connection");
import {activateWebcam} from "./streaming/webcam";
export function StartAnimation () {
  $content.innerHTML= ""

}

export function Webcam(){
console.log("hello");
console.log($content);
$content.innerHTML =
`<div class = "video__container">
<video autoplay loop muted>
<source src="assets/ video's/background.mp4" type = "video/mp4"/>
</video>
<header class = "home__header">
<div class = "header__container">
<div class = "header__logo">
<div class = "home__icons">
<span class="iconify" data-inline="false" data-icon="carbon:laptop" style="color: #ffffff; font-size: 35.23699378967285px;"></span>
<span class="iconify" data-inline="false" data-icon="teenyicons:vr-headset-outline" style="color: #ffffff; font-size: 35.693641662597656px;"></span>
</div>
<h1 class = "header__title">The VR Social Experiments</h1>
</div>
<div class = "home__connection">
    <div class = "home__client">
        <span class="iconify" data-inline="false" data-icon="carbon:laptop" style="color: #ffffff; font-size: 25.23699378967285px;"></span>
        <p class = "home__client--title">Overseer</p>
        <p class = "home__client--para">Connected</p>
    </div>
    <div class = "home__client">
        <span class="iconify" data-inline="false" data-icon="teenyicons:vr-headset-outline" style="color: #ffffff; font-size: 25.23699378967285px;"></span>
        <p class = "home__client--title">Test Subject</p>
        <p class = "home__client--para" >Connected</p>
    </div>
</div>
</div>
</header>
<div class = "connecting__content">
<div class = "home__container">
<div class = "navigator">
<div class = "navigator__container">
<div class = "navigator__wrapper">
<p class = "nav__item selected" >Webcam</p>
</div>
<div class = "navigator__wrapper">
<p class = "nav__item">Experiment room feed</p>
</div>
<div class = "navigator__wrapper">
<p class = "nav__item">Minigames</p>
</div>
</div>
<div class = "webcam__container">
<div class = "webcam__pcicon"><span class="iconify" data-inline="false" data-icon="carbon:laptop" style="color: #ffffff; font-size: 65.23699378967285px;"></span></div>
<video class = "webcam__video" id="video" playsinline autoplay ></video>
<div class = "webcam__vrfeed">
<span class="iconify" data-inline="false" data-icon="teenyicons:vr-headset-outline" style="color: #ffffff; font-size: 45.23699378967285px;"></span>
<p class = "webcam__vrfeed--thumbs"> Gives you a thumbs down </p>
<span class="iconify" data-inline="false" data-icon="emojione:thumbs-down" style="color: #ffffff; font-size: 45.23699378967285px;"></span>
</div>
</div>
</div>
</div>
</div>`
activateWebcam();
}

