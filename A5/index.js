var images = ['https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/04/09/b92f5b77-d201-4406-8127-05789858af69_8dd3646c.jpg', 'https://media.cnn.com/api/v1/images/stellar/prod/210428095200-pulisic.jpg?q=x_4,y_272,h_2027,w_3603,c_crop/h_720,w_1280', 'https://seahawkswire.usatoday.com/wp-content/uploads/sites/61/2022/06/1345424898.jpg?w=1000&h=600&crop=1', 'https://s.yimg.com/ny/api/res/1.2/z1POQlsjSQ30KV.QHaCXvA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-07/bdc8f320-07e2-11ed-bb6a-b401e123e3cc', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUuBXjiZXtj_sbChXdaepzILzixCGTIkDYw&usqp=CAU'];
var descriptions = ['Son Heung Min', 'Christian Pulisic', 'DK Metcalf and Tyler Lockett', 'Julio Rodriguez', 'The GOAT Lionel Messi'];
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
