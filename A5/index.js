var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
var descriptions = ['Image 1 Description', 'Image 2 Description', 'Image 3 Description', 'Image 4 Description', 'Image 5 Description'];
var currentIndex = 0;

var slideshowImage = document.getElementById('slideshow-image');
var imageDescription = document.getElementById('image-description');
var prevButton = document.getElementById('prev-button');
var nextButton = document.getElementById('next-button');

// Function to update the slideshow with the current image and description
function updateSlideshow() {
  slideshowImage.src = images[currentIndex];
  imageDescription.textContent = descriptions[currentIndex];
}

// Event handler for previous button
prevButton.addEventListener('click', function() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateSlideshow();
});

// Event handler for next button
nextButton.addEventListener('click', function() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateSlideshow();
});

// Automatically change slide every 3 seconds
setInterval(function() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateSlideshow();
}, 3000);
