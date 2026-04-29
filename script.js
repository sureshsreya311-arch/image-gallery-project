let images = document.querySelectorAll(".gallery img");

/* ================= DARK MODE ================= */
function toggleDarkMode(){
  document.body.classList.toggle("dark");
}

/* ================= IMAGE ENLARGE ================= */
images.forEach(img => {
  img.addEventListener("click", function(){
    img.classList.toggle("zoom");
  });
});

/* ================= SLIDESHOW ================= */
let index = 0;

function showSlide(){
  images.forEach(img => img.style.display = "none");
  images[index].style.display = "block";
}

function nextSlide(){
  index++;
  if(index >= images.length){
    index = 0;
  }
  showSlide();
}

/* show first image initially */
if(images.length > 0){
  showSlide();
}
