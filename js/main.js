var myImage = document.getElementById("mainImage");
var imageArray = ["main.jpg", "5.jpg", "main.jpg", "5.jpg"];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}
setInterval(changeImage, 3000);