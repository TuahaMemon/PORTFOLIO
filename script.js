const portfolioItems = document.querySelectorAll(".portfolio-item");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector("#modal-img");
const closeButton = document.querySelector(".close-button");

portfolioItems.forEach(item => {
  item.addEventListener("click", event => {
    modal.style.display = "block";
    modalImg.src = event.target.src;
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
