// the number of available images
var totalImages = 3;
// currently displayin image
var currentImg = 0;

// cycling throuhg and displaying selected image
function imageCycle() {
	if (currentImg >= totalImages) {
		currentImg = 1;
	} else {
		currentImg++;
	}
	document.getElementById("photoSlider").style.backgroundImage=
	'url(' + 'images/image' + '%20' + '\\(' + currentImg + '\\)' + '.jpg' + ')';
}

// go to next the image based on a time interval measured in milliseconds
var cycleInterval = setInterval(function(){imageCycle()}, 3000);
