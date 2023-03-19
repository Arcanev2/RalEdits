var currentImage = 0;
var images = document.querySelectorAll(".image-container img");
var leftButton = document.getElementById("left-button");
var rightButton = document.getElementById("right-button");

leftButton.addEventListener("click", function() {
	if (currentImage > 0) {
		currentImage--;
		images[currentImage].style.display = "block";
		images[currentImage+1].style.display = "none";
	}
});

rightButton.addEventListener("click", function() {
	if (currentImage < images.length - 1) {
		currentImage++;
		images[currentImage].style.display = "block";
		images[currentImage-1].style.display = "none";
	}
});