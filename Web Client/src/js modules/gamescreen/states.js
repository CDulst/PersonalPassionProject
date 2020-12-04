let $content = document.querySelector(".body");

import {OnReceiveData} from "./receiver/receiver";

export function StartAnimation () {
  $content.innerHTML= ""
}

export function NeutralScreen(){
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

<div class = "webcam__container">

<img id="DisplayImg" class = "webcam__video" src="" width=100% />
<div class = "webcam__vrfeed">
</div>
</div>
</div>
</div>
</div>`
OnReceiveData();
}

