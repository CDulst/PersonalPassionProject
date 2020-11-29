const socket = require("../socket/connection");
const $container = document.querySelector(".connecting__container--start");
const div = document.createElement("div");
let checker = false;


export function IntroAnimation(){
  const $icon = document.querySelectorAll(".iconify" );
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

export function TextParser(text,element){
      let i = 0;
      console.log(element);
      const parse = setInterval(
        function(){
          element.textContent = text.substring(0,i);
          i += 1;
          if (i === text.length+1){
          clearInterval(parse);
          }
        }, 70);
}

export function TextRemover(text,element){
  let i = text.length;
  console.log(element);
  const remove = setInterval(
    function(){
      element.textContent = text.substring(0,i);
      i -= 1;
      if (i < 0){
      clearInterval(remove);
      }
    }, 70);
}

export function Loading(){
      div.innerHTML = `<svg class = "loading__svg--start" width="70" height="70" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
      const $svg = document.querySelector(".loading__svg--start");
      $svg.classList.add("loading__svg");
      $svg.classList.remove("loading__svg--start");
}

export function Name(){
  checker = true;
  const $text = document.querySelector(".name__title");
  const $div = document.querySelector(".code__inputs");
  const $fields = document.querySelectorAll(".code__input");
  const $info = document.querySelector(".name__info")
  const $nameField = document.createElement("input");
  $nameField.type = "text";
  $nameField.classList.add("name__input");
  $info.textContent = "You are the overseer of this experiment,  Your name will be displayed for the VR user to see."
  TextRemover("Enter connection code", $text)
  let waitime = 300;
  Array.from($fields).reverse().forEach(field => {
  setTimeout(() => {
  field.remove();
  }, waitime);
  waitime += 300;
  })
  setTimeout(() => {
  TextParser("Enter your name.",$text);
  $div.appendChild($nameField);
  }, 2000);
  document.addEventListener("keyup", function(event) {
  if (event.key === "Enter"){
    if ($nameField.value === ""){
      $info.textContent = "Please fill in your name";
    }
    else{
    socket.nameEntered($nameField.value);
    }
  }
});
}

export function Code(){
  div.innerHTML = "";
  const $h2 = document.createElement("h2");
  const $inputs = document.createElement("div");
  const $info = document.createElement("div");
  $info.innerHTML =
  `<p class = name__info>*See the connection code inside of the  test subject VR client</p>`
  $h2.classList.add("name__title");
  $inputs.classList.add("code__inputs");
  div.appendChild($h2);
  div.appendChild($inputs);
  div.appendChild($info);
  div.classList.add("name__content");
  $container.appendChild(div);
  const text = "Enter connection code";
  TextParser(text,$h2);
  let i = 1;
  var addInput = setInterval(() => {
  const $input = document.createElement("input");
  $input.type = "text";
  $input.classList.add("code__input");
  $input.id = `code${i}`;
  $inputs.appendChild($input);
  i += 1;
  if (i === 6){
    clearInterval(addInput);
  }
  }, 300);
  document.addEventListener("keyup", function(event) {
  if(event.key === "Enter"){
  if (!checker){
  let code = "";
  let checked = true;
  const $fields = document.querySelectorAll(".code__input");
  console.log($fields);
   $fields.forEach(input => {
     console.log(input.value);
     if(input.value === ""){
       $info.innerHTML = `<p class = "name__info red">*Fill in all 5 characters</p>`
       checked = false;
     }
     else{
      code += input.value;
     }
   })
   if (checked){
     console.log(socket);
     socket.checkCode(code,$info,checker);

   }
  }
}
  });
}


export function Connected (){
  const $text = document.querySelector(".name__title");
  TextRemover("Enter your name",$text);
  const $info = document.querySelector(".name__info")
  const $div = document.querySelector(".code__inputs");
  $info.textContent = "";
  $div.innerHTML = "";
  setTimeout(() => {
    div.innerHTML = `
  <div class = "connected__container">
  <p class = "connected__paragraph--start"> </p>
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
  const $title = document.querySelector('.connected__paragraph--start');
  TextParser("Connected",$title);
  $title.classList.add("connected__paragraph");
  $title.classList.remove("connected__paragraph--start");
  setTimeout(() => {
    window.open("http://localhost:443/sender.html");
  }, 2000);
  }, 2000);
}
