let images = document.querySelectorAll(".gallery img");

/* ================= DARK MODE ================= */
function toggleDarkMode(){
  document.body.classList.toggle("dark");
}

/* ================= IMAGE ZOOM ================= */
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

/* auto slideshow */
setInterval(nextSlide, 2000);

/* show first image */
if(images.length > 0){
  showSlide();
}

/* ================= LIKE FUNCTION ================= */
function likeImage(img){
  alert("❤️ Liked: " + img.src.split("/").pop());
}

/* ================= DOWNLOAD FUNCTION ================= */
function downloadImage(img){
  let a = document.createElement("a");
  a.href = img.src;
  a.download = img.src.split("/").pop();
  a.click();
}
