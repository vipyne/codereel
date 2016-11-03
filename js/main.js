// <script type="text/javascript" src="githubbbbb" initials="<your initials here>"></script>
var vip = 'wvfs';

var all = (function(window, document, undefined){

var scale = 1;
var sWidth = 435 / scale;
var sHeight = 220 / scale;
var sRadius = 6 / scale;
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
var inputText = vip;
// var inputText = 'vip';
// var inputText = document.currentScript.getAttribute('initials');
var tempText = inputText.split('');
var inputLength = tempText.length;
var derpText = tempText.reverse().slice(tempText.length - 4).reverse();
initialsText = derpText.join('');

var textSize = sTextSize;
textNameCanvasContext.font = 'bold 300px monospace';
// textNameCanvasContext.font = 'bold ' + sTextSize + 'px monospace';
var textWidth = textNameCanvasContext.measureText(initialsText).width;
console.log('asdf:', textNameCanvasContext.measureText(initialsText));
textNameCanvas.width = textWidth;
var rows = 11;
var cols = 15;
var radius = sRadius;
var newCols = Math.floor(textNameCanvas.width / 20);
var xIncrement = textNameCanvas.width / newCols;
var yIncrement = sHeight/rows;

textNameCanvasContext.fillStyle = 'rgba(100, 100, 100, 0.01)'; // super high transparency
// textNameCanvasContext.fillText('sfsd', xIncrement, sHeight/2);
console.log('xIncrement', xIncrement)
console.log('sHeight/2', sHeight/2)
textNameCanvasContext.font = 'bold 300px monospace';
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


// iterate and draw dots !
dotMatrix.fillStyle = '#b2321e';
for (var i = 1; i < rows; i++) {
  for (var j = 1; j < newCols; j++) {
    var center = [xIncrement * j, yIncrement * i];
    var newRad = (xIncrement/4 > (radius + j/2 - 2)) ? xIncrement/4 : (radius + j/2 - 2);
    // var newRad = radius + j/2 - 2;
    if (pixelUsed(center[0], center[1])) {
      dotMatrix.beginPath(); // this effects rasteration... its interesting
      dotMatrix.moveTo(center[0], center[1]);
      dotMatrix.arc(center[0], center[1], newRad, 0, 2 * Math.PI, false);
      dotMatrix.fill();
      dotMatrix.closePath();
    }
  }
}


/////////////////////////////
})(window, document)
