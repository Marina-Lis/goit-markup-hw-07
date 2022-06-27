(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("open-modal");
    refs.body.classList.toggle("no-scroll");
  }
  // document.getElementById("submitMyForm").addEventListener("click", function(event){
  //   event.preventDefault();
  //   console.log("clickMyForm");
  //       }
         
  //       );
})();
