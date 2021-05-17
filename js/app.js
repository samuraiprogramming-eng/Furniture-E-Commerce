// *************** nav fixed ***************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 62) {
       navbar.classList.add("fixed");
   } else {
       navbar.classList.remove("fixed");
   }
});