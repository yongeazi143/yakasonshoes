const displayMessage = () => {
  const form = document.querySelector("form");
  let modal = document.querySelector(".modal-box");
  let closeModal = document.querySelector("[close-btn]");
  form.reset();
  modal.classList.toggle("display-none");

  closeModal.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("display-none");
  });
};
