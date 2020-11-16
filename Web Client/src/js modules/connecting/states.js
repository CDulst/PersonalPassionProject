

const $container = document.querySelector(".connecting__container--start");
const div = document.createElement("div");
IntroAnimation();

export function IntroAnimation(){
  const $icon = document.querySelectorAll(".iconify");
  const $title = document.querySelector(".connecting__title--start")
  console.log($icon);
  setTimeout(
    function(){
    $container.classList.add("connecting__container");
    $container.classList.remove("connecting__container--start");
    }
    , 2000);
    setTimeout(
    function(){
      $icon.forEach(icon => {
      icon.classList.add("icon");
      icon.classList.remove("icon__start");
      })
      console.log($icon);
      }
      , 3000);
      setTimeout(
        function(){
          $title.classList.add("connecting__title");
          $title.classList.remove("connecting__title--start");
          }
          , 4000);



}

export function Loading(){
  setTimeout(
    function(){
      div.innerHTML = `<svg class = "loading__svg" width="70" height="70" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
              <stop stop-color="#fff" stop-opacity="0" offset="0%"/>
              <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
              <stop stop-color="#fff" offset="100%"/>
          </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)">
              <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                  <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite" />
              </path>
              <circle fill="#fff" cx="36" cy="18" r="1">
                  <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite" />
              </circle>
          </g>
      </g>
    </svg>`
      div.classList.add("loading__content");
      $container.appendChild(div);
      }
      , 3000);
}

export function Name(){
  div.innerHTML = `<h2 class = "name__title">Enter Your Name</h2>
  <input type="text" class = "name__input">`
  div.classList.add("name__content");
  $container.appendChild(div);
}

export function Code(){
  div.innerHTML = `<h2 class = "name__title">Enter Connection Code</h2>
  <div class = "code__inputs">
  <input type="text" class = "code__input" maxlength="1">
  <input type="text" class = "code__input" maxlength="1">
  <input type="text" class = "code__input" maxlength="1">
  <input type="text" class = "code__input" maxlength="1">
  <input type="text" class = "code__input" maxlength="1">
  </div>`
  div.classList.add("name__content");
  $container.appendChild(div);
}

export function Connected (){
  div.innerHTML = `
  <div class = "connected__container">
  <p class = "connected__paragraph"> Connected </p>
  </div>
  <div class = "connected__clients">
  <div class = "connected__client">
      <span class="iconify" data-inline="false" data-icon="carbon:laptop" style="color: #ffffff; font-size: 25.23699378967285px;"></span>
      <p class = "connected__client--title">Overseer</p>
      <p class = "connected__client--para">Connected</p>
  </div>
  <div class = "connected__client">
      <span class="iconify" data-inline="false" data-icon="teenyicons:vr-headset-outline" style="color: #ffffff; font-size: 25.23699378967285px;"></span>
      <p class = "connected__client--title">Test Subject</p>
      <p class = "connected__client--para" >Connected</p>
  </div>
  </div>`
  $container.appendChild(div);
}
