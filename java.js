$(function(){
    $('#headernav').load('headernav.html');
});
$(function(){
    $('#footer').load('footer.html');
});

var i = 0;
var images = [];
var slideTime = 10000; // 3 seconds

images[0] = 'websitebackground1.jpg';
images[1] = 'websitebackground2.jpg';
images[2] = 'websitebackground3.jpg';

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

function rotateImage() {
    var img = document.getElementById('logoan');
    img.style.transform = 'rotate(90deg)';
    setTimeout(loadpage, 200);
function loadpage(){
    window.location = "index.html"

}    
    
    


}
