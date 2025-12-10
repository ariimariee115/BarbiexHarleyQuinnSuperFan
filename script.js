// Fade and change image
function changeImageTo(path) {
  const img = document.getElementById("mainImage");
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = path;
    img.style.opacity = 1;
  }, 300);
}

// Play any audio by ID
function playAudio(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}

/* ---- Pink Buttons ---- */

function changeToBarb() {
  changeImageTo("images/faces/barb.png");
}

function changeToScene() {
  changeImageTo("images/faces/rollerskate.png");
}

function changeToQuote() {
  changeImageTo("images/faces/barbiequote.png");
}

/* ---- Blue Buttons ---- */

function changeToHarleyChar() {
  changeImageTo("images/faces/margotharley.png");
}

function changeToHarleyScene() {
  changeImageTo("images/faces/friendnew.png");
}

function changeToHarleyQuote() {
  changeImageTo("images/faces/harquote.png");
}

/* ---- Reset ---- */

function resetImage() {
  changeImageTo("images/faces/together.png");
}

/* ---- Sounds ---- */

function playSound() {
  playAudio("my-click");
}

function playHiBarbie() {
  playAudio("hibarbie");
}

function playHarleyQuinn() {
  playAudio("harleyquinn");
}
