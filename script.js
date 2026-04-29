let images = document.querySelectorAll(".gallery img");
let selectedImage = null;

/* ================= DARK MODE ================= */
function toggleDarkMode(){
  document.body.classList.toggle("dark");
}

/* ================= SELECT IMAGE ================= */
images.forEach(img => {
  img.addEventListener("click", function(){

    // remove old selection
    images.forEach(i => i.classList.remove("selected"));

    // set new selection
    img.classList.add("selected");
    selectedImage = img;

    // show in viewer
    document.getElementById("mainImage").src = img.src;
  });
});

/* ================= LIKE ================= */
function likeImage(){
  if(selectedImage){
    alert("❤️ Liked: " + selectedImage.src.split("/").pop());
  } else {
    alert("Select an image first!");
  }
}

/* ================= DOWNLOAD ================= */
function downloadImage(){
  if(!selectedImage){
    alert("Select an image first!");
    return;
  }

  let a = document.createElement("a");
  a.href = selectedImage.src;
  a.download = selectedImage.src.split("/").pop();
  a.click();
}

/* ================= NEXT ================= */
function nextImage(){
  let images = document.querySelectorAll(".gallery img");

  if(!selectedImage){
    selectedImage = images[0];
  }

  let index = Array.from(images).indexOf(selectedImage);
  index = (index + 1) % images.length;

  images[index].click();
}

/* ================= PREV ================= */
function prevImage(){
  let images = document.querySelectorAll(".gallery img");

  if(!selectedImage){
    selectedImage = images[0];
  }

  let index = Array.from(images).indexOf(selectedImage);
  index = (index - 1 + images.length) % images.length;

  images[index].click();
}
