function openLightbox(img) {
   var lightbox = document.getElementById("lightbox");
   var lightboxImg = document.getElementById("lightbox-img");
   lightbox.style.display = "flex";
   lightboxImg.src = img.src;
}

function closeLightbox() {
   document.getElementById("lightbox").style.display = "none";
}
