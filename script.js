function toggleList(listId) {
    let list = document.getElementById(listId);
    if (list.className === "hidden") {
        list.className = "";
    } else {
        list.className = "hidden";
    }
}

// Scrolling Progress Bar
// Function to update the progress bar
function updateProgressBar() {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // Get the height of the document
    const docHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  
    // Get the height of the window
    const winHeight = window.innerHeight;
  
    // Calculate the scroll progress
    const scrolled = (scrollTop / (docHeight - winHeight)) * 100;
  
    // Update the width of the progress bar
    document.getElementById("progressBar").style.width = `${scrolled}%`;
  }
  
  // Add the scroll event listener
  window.addEventListener('scroll', updateProgressBar);
  
  // Initialize the progress bar
  updateProgressBar();


// Sign Up Box Effects (Hero 1)
const signUpBox = document.querySelector('.sign_up_box');

signUpBox.addEventListener("mouseover", () => {
    signUpBox.style.width = "80%";
    //signUpBox.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.5)"
});

signUpBox.addEventListener("mouseout", () => {
    signUpBox.style.width = "70%";
    //signUpBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.05)";
});

// Hero 2


// Hero 11

console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);
