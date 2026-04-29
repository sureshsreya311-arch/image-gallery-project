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

    // show in viewer (if you have mainImage)
    let viewer = document.getElementById("mainImage");
    if(viewer){
      viewer.src = img.src;
    }
  });
});

/* ================= LIKE ================= */
function likeImage(){
  if(selectedImage){
    alert("❤️ Liked: " + selectedImage.src.split("/").pop());
  } else {
    alert("Please select an image first!");
  }
}

/* ================= DOWNLOAD ================= */
function downloadImage(){
  if(!selectedImage){
    alert("Please select an image first!");
    return;
  }

  let a = document.createElement("a");
  a.href = selectedImage.src;
  a.download = selectedImage.src.split("/").pop();
  a.click();
}

/* ================= NEXT / PREV (optional) ================= */
function nextImage(){
  if(!selectedImage) return;

  let index = Array.from(images).indexOf(selectedImage);
  index = (index + 1) % images.length;

  images[index].click();
}

function prevImage(){
  if(!selectedImage) return;

  let index = Array.from(images).indexOf(selectedImage);
  index = (index - 1 + images.length) % images.length;

  images[index].click();
}
