var all = (function(window, document, undefined) {
/////////////////////////////
var script = document.getElementsByTagName('script')[0];
var vip = script.getAttribute('initials');

var scale = 1;
var sWidth = 435 / scale;
var sHeight = 90 / scale;
var sRadius = 3.5 / scale;
var sRows = 11 / scale;
var sCols = 15 / scale;
var sTextSize = 370 / scale;

var textNameCanvas = document.createElement('canvas');
textNameCanvas.setAttribute('class', 'header-float');
textNameCanvas.style.position = 'absolute';
textNameCanvas.style.margin = '50px 50px 0';
var bgInsert = document.getElementsByClassName('social-media')[0];
document.getElementById('header').insertBefore(textNameCanvas, bgInsert);
textNameCanvas.width = sWidth;
textNameCanvas.height = sHeight;
var textNameCanvasContext = textNameCanvas.getContext('2d');
var dotMatrix = textNameCanvasContext;

// V P text
// var inputText = vip;
// var tempText = inputText.split('');
// var inputLength = tempText.length;
// var derpText = tempText.reverse().slice(tempText.length - 3).reverse();
// initialsText = derpText.join('');
initialsText = vip;

var textSize = sTextSize;
textNameCanvasContext.font = '54px bold monospace';
var textWidth = textNameCanvasContext.measureText(initialsText).width;
console.log('textWidth', textWidth)
textNameCanvas.width = textWidth + 120;
var rows = 37;
var cols = 15;
var newCols = 126;
var radius = sRadius;
var xIncrement = textNameCanvas.width / newCols;
var yIncrement = sHeight/rows;

textNameCanvasContext.fillStyle = 'rgba(100, 100, 100, 0.01)'; // super high transparency
textNameCanvasContext.font = '54px bold monospace';
textNameCanvasContext.textBaseline = "middle";
textNameCanvasContext.textAlign = "left";
textNameCanvasContext.fillText(initialsText.toUpperCase(), xIncrement, sHeight/2);

// is pixel inside a letter?
function pixelUsed(x, y) {
  var textPixels = textNameCanvasContext.getImageData(x, y, sWidth, sHeight);
  var pixel = textPixels.data;

  for (var i = 0, pixelLength = pixel.length; i < pixelLength; i += 4) {
    if ( pixel[i + 3] !== 0) {
      return true;
    }
    return false;
  }
}

var colorSeed1 = 90;
var colorSeed2 = 230;
// iterate and draw dots !
for (var i = 1; i < rows; i++) {
  for (var j = 1; j < newCols; j++) {
    var shade = colorSeed1 - i*5 + colorSeed2 + j/5;
    var gShade = i*5 - colorSeed2 + j/5;
    var bShade = colorSeed1 + i*5 + j/5;
    // // each color is 0 - 255      __red__       __green__      __blue__
    // dotMatrix.fillStyle = 'rgb(' + shade + ',' + gShade + ',' + bShade + ')';
    dotMatrix.fillStyle = 'rgb(1, 1, 1)';
    var center = [xIncrement * j, yIncrement * i];
    console.log('asdfas', (radius - 2 -.3)*(i/8));
    var newRad = ( ((radius - 2 -.3)*(i/24) ) > 1.9) ? 1.9 : (radius - 2 -.3)*(i/24);
    if (pixelUsed(center[0], center[1])) {
      // dotMatrix.beginPath(); // this effects rasteration... its interesting
      dotMatrix.moveTo(center[0], center[1]);
      dotMatrix.arc(center[0], center[1], newRad, 0, 2 * Math.PI, false);
      dotMatrix.fill();
      dotMatrix.closePath();
    }
  }
}
/////////////////////////////
})(window, document);