function Accordion() {
  const accordionBtns = document.querySelectorAll(".accordion");

  accordionBtns.forEach((accordion, accordionIndex) => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");
      let content = this.nextElementSibling;
      const isOpen = content.style.maxHeight;
      const element = document.querySelectorAll(".seta");
      function closeAccordion() {
        content.style.maxHeight = null;
      }
      function openAccordion() {
        content.style.maxHeight = content.scrollHeight + "px";

      }
      function changeArrowSide() {
        if (accordionIndex < element.length) {
          if (element?.[accordionIndex].classList.contains("selected")) {
            element?.[accordionIndex].classList.remove("selected");
          } else {
            element?.[accordionIndex].classList.add("selected");
          }
        }
      }

      if (isOpen) {
        closeAccordion();
        changeArrowSide()
      } else {
        openAccordion()
        changeArrowSide()
      }
    };
  });
}
