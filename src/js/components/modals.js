const btns = document.querySelectorAll(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");
const modalClose = document.querySelectorAll(".close-btn");
const mainModalBtns = document.querySelectorAll(".main-modal-btn");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document.querySelector(`[data-target="${path}"]`).classList.add("modal--visible");
    console.log('xyi');
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});

modalClose.forEach((el) => {
  el.addEventListener("click", () => {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  });
});

mainModalBtns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    modalOverlay.classList.add("modal-overlay--visible");
    document.querySelector(`[data-target="${path}"]`).classList.add("modal--visible");
  });
});
