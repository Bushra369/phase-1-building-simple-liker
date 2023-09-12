// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartIcons = document.querySelectorAll(".like-glyph");
const errorModal = document.querySelector("#error-modal");

mimicServerCall()
  .then((data) => {
    console.log(data);
    heartIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        icon.innerText === FULL_HEART
          ? (icon.innerText = EMPTY_HEART)
          : (icon.innerText = FULL_HEART);
        icon.classList.toggle("activated-heart");
      });
    });
  })
  .catch((err) => {
    console.log(err.message);
    errorModal.textContent = "An error occurred. Please try again later.";
    errorModal.classList.remove("hidden");
    setTimeout(() => errorModal.classList.add("hidden"), 3000);
  });




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
