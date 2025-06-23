const button = document.querySelector(".back-to-top");
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const offScreenMenuLinks = document.querySelectorAll(".off-screen-menu a");
const copyEmailLink = document.querySelector(".copy-email-link");

window.addEventListener("scroll", () => {
   if (window.scrollY > 700) {
      button.style.display = "flex";

      void button.offsetWidth;
      button.classList.add("show");
   } else {
      button.classList.remove("show");
   }
});

button.addEventListener("transitionend", (e) => {
   if (!button.classList.contains("show")) {
      button.style.display = "none";
   }
});

window.addEventListener("resize", () => {
   const currentWidth = window.innerWidth;

   if (currentWidth > 768 && hamMenu) {
      hamMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
   }
});

hamMenu.addEventListener("click", () => {
   hamMenu.classList.toggle("active");
   offScreenMenu.classList.toggle("active");
});

offScreenMenuLinks.forEach((link) => {
   link.addEventListener("click", () => {
      if (hamMenu) {
         hamMenu.classList.remove("active");
         offScreenMenu.classList.remove("active");
      }
   });
});

copyEmailToClipBoard = () => {
   const email = "mbportuguez2@gmail.com";

   navigator.clipboard
      .writeText(email)
      .then(() => {
         alert("Email Copied");
      })
      .catch((err) => {
         console.error("Failed To Copy", err);
         alert("Failed to Copy Email");
      });
};

copyEmailLink.addEventListener("click", () => {
   copyEmailToClipBoard();
});
