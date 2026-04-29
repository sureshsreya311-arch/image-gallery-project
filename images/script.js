
let boxes = document.querySelectorAll(".image-box");
let buttons = document.querySelectorAll(".buttons button");

function filterSelection(category){

    images.forEach(function(img){

        if(category === "all"){
            img.style.display = "block";
        }
        else{
            if(img.classList.contains(category)){
                img.style.display = "block";
            }
            else{
                img.style.display = "none";
            }
        }

    });

    // ACTIVE BUTTON
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

// DEFAULT LOAD
filterSelection("all");

// CLICK IMAGE → ALERT + FULLSCREEN
images.forEach(function(img){

    img.addEventListener("click", function(){

        alert("You clicked the image!");

        document.getElementById("fullscreen").style.display = "flex";
        document.getElementById("fullImg").src = this.src;

    });

});

// CLOSE FULLSCREEN
function closeFullscreen(){
    document.getElementById("fullscreen").style.display = "none";
}
// 🔍 SEARCH FUNCTION
function searchImages(){

    let input = document.getElementById("search").value.toLowerCase();
    let boxes = document.querySelectorAll(".image-box");

    boxes.forEach(function(box){

        let text = box.innerText.toLowerCase();

        if(text.includes(input)){
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }

    });
}

// 🌙 DARK MODE
function toggleDarkMode(){
    document.body.classList.toggle("dark");
}

// 🎞 SLIDESHOW
let slideInterval;
let currentIndex = 0;

function startSlideshow(){

    let images = document.querySelectorAll(".gallery img");

    slideInterval = setInterval(function(){

        document.getElementById("fullscreen").style.display = "flex";
        document.getElementById("fullImg").src = images[currentIndex].src;

        currentIndex++;

        if(currentIndex >= images.length){
            currentIndex = 0;
        }

    }, 2000);
}

function stopSlideshow(){
    clearInterval(slideInterval);
    document.getElementById("fullscreen").style.display = "none";
}
// ❤️ LIKE
function likeImage(btn){
    btn.innerHTML = "❤️ Liked!";
}

// ⬇ DOWNLOAD
function downloadImage(src){
    let a = document.createElement("a");
    a.href = src;
    a.download = src;
    a.click();
}

// 📤 UPLOAD
function uploadImage(event){

    let file = event.target.files[0];
    let url = URL.createObjectURL(file);

    let div = document.createElement("div");
    div.className = "image-box";

    div.innerHTML = `
        <img src="${url}">
        <p>Uploaded Image</p>
        <button onclick="likeImage(this)">❤️ Like</button>
        <button onclick="downloadImage('${url}')">⬇ Download</button>
    `;

    document.querySelector(".gallery").appendChild(div);
}