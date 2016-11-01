var hiNerds = (function(){
  console.log('hi nerds.  your reward for snooping here is a link to my super secret tumblr: http://gemintheruff.tumblr.com/');
  console.log('also, i\'m silly: http://playvideo.herokuapp.com/');
  console.log('check back soon for some sweet ascii art');

})

var all = (function(window, document, undefined){
console.log('function hiNerds')
/////////////////////////////

// V P   D O T S ////////////
/////////////////////////////
/////////////////////////////

var scale = 1;
var sWidth = 435 / scale;
var sHeight = 250 / scale;
var sRadius = 6 / scale;
var sRows = 11 / scale;
var sCols = 15 / scale;
var sTextSize = 300 / scale;

var textNameCanvas = document.createElement('canvas');
textNameCanvas.style.position = 'absolute';
textNameCanvas.style.margin = '50px 20px 200px';
var bgInsert = document.getElementsByClassName('all-wrap')[0];
document.getElementsByClassName('mainy')[0].insertBefore(textNameCanvas, bgInsert);
textNameCanvas.width = sWidth;
textNameCanvas.height = sHeight;
var textNameCanvasContext = textNameCanvas.getContext('2d');

var dotMatrix = textNameCanvasContext;
// var rows = sRows;
// var cols = sCols;
var rows = 11;
var cols = 15;
var radius = sRadius;
var xIncrement = sWidth/cols;
var yIncrement = sHeight/rows;

// V P text
var textSize = sTextSize
textNameCanvasContext.font = 'bold ' + sTextSize + 'px sans-serif'
textNameCanvasContext.textBaseline = "middle";
textNameCanvasContext.textAlign = "left";
textNameCanvasContext.fillStyle = 'rgba(100, 100, 100, 0.01)'; // super high transparency
textNameCanvasContext.fillText('VP', xIncrement, sHeight/2);

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
  for (var j = 1; j < cols; j++) {
    var center = [xIncrement * j, yIncrement * i];
    if (pixelUsed(center[0], center[1])) {
      dotMatrix.beginPath(); // this effects rasteration... its interesting
      dotMatrix.moveTo(center[0], center[1]);
      dotMatrix.arc(center[0], center[1], radius + j/2 - 2, 0, 2 * Math.PI, false);
      dotMatrix.fill();
      dotMatrix.closePath();
    }
  }
}

//     B G     //////////////
// D U S T //////////////////
/////////////////////////////
/////////////////////////////
var dustCanvas = document.createElement('canvas');
dustCanvas.style.position = 'absolute';
dustCanvas.width = window.innerWidth - 50;
dustCanvas.height = window.innerHeight;
var canvasW = dustCanvas.width;
var canvasH = dustCanvas.height;
var dustCanvasContext = dustCanvas.getContext('2d');
document.getElementsByClassName('mainy')[0].insertBefore(dustCanvas, bgInsert);

var randomTotal = Math.random() * (370 - 300) + 300;
dustCanvasContext.strokeStyle = 'rgba(50, 50, 50, 0.03)';
dustCanvasContext.globalCompositeOperation = 'darken';
dustCanvasContext.lineCap = 'round';

for (var i = 0; i < randomTotal; i++) {
  var randomStartX = Math.random() * canvasW;
  var randomEndX = Math.random() * (randomStartX - (randomStartX - 10)) + (randomStartX - 10);
  var randomStartY = Math.random() * canvasH;
  var randomEndY = Math.random() * (randomStartY - (randomStartY - 10)) + (randomStartY - 10);
  var longThinFactor = Math.abs(randomStartY - randomEndY);
  var strokeWidth = Math.random() * 4 - longThinFactor;
  var rotation = Math.random() * (15 - 10) - 10;

  dustCanvasContext.shadowColor = 'rgba(1, 1, 1, 1)';
  dustCanvasContext.shadowBlur = 3;
  dustCanvasContext.beginPath();
  dustCanvasContext.moveTo(randomStartX + rotation, randomStartY);
  dustCanvasContext.quadraticCurveTo(randomStartX, randomStartY, randomEndX, randomEndY);
  dustCanvasContext.lineWidth = strokeWidth;
  dustCanvasContext.stroke();
}

//     B G     //////////////
// C O R N E R //////////////
/////////////////////////////
/////////////////////////////

var roundedCornerDim = 200;
var topCornerCanvas = document.createElement('canvas');
topCornerCanvas.style.position = 'absolute';
topCornerCanvas.width = roundedCornerDim;
topCornerCanvas.height = roundedCornerDim;
var topCornerCanvasContext = topCornerCanvas.getContext('2d');
document.getElementsByClassName('mainy')[0].insertBefore(topCornerCanvas, bgInsert);

topCornerCanvasContext.globalCompositeOperation = 'source-over';
topCornerCanvasContext.shadowBlur = 0;
topCornerCanvasContext.closePath();
topCornerCanvasContext.moveTo(0, 0);

topCornerCanvasContext.moveTo(0, 0);
topCornerCanvasContext.arc(roundedCornerDim, roundedCornerDim, roundedCornerDim, 0, 2 * Math.PI, false);
topCornerCanvasContext.clip();

topCornerCanvasContext.fillStyle = 'rgba(255, 255, 255, 255)';
topCornerCanvasContext.fillRect(0, 0, roundedCornerDim, roundedCornerDim);

var cornerPixels = topCornerCanvasContext.getImageData(0, 0, roundedCornerDim, roundedCornerDim);
var cPixel = cornerPixels.data;

for (var i = 0, cPixelLength = cPixel.length; i+4 < cPixelLength; i += 4) {
  cPixel[i] = 255;  // just make them all white...
  cPixel[i + 1] = 255;
  cPixel[i + 2] = 255;
  cPixel[i + 3] = Math.abs(255 - cPixel[i + 3]); // only show the ones we want
}
topCornerCanvasContext.putImageData(cornerPixels, 0, 0);




// L I N K S ////////////////
/////////////////////////////
/////////////////////////////

// todo: site source
var addEvent = function(theEvent, element, func){
  if(element.addEventListener){
    element.addEventListener(theEvent, func, false)
  }else if(element.attachEvent){
    element.attachEvent('on' + theEvent, func)
  }
}
var hover = (function(){
  var host = ''
  var afterSrc = function(icon){
    var hover
    var id = icon.getAttribute('id')
    var hoverIcons = {
      'github': 'img/github-after.png',
      'twitter': 'img/twitter-after.png',
      'linkedin': 'img/linkedin-after.png',
      'instagram': 'img/instagram-after.png'
    }
    hover = hoverIcons[id]
    return host + hover
  }

  var beforeSrc = function(icon){
    var img
    var id = icon.getAttribute('id')
    var hoverIcons = {
      'github': 'img/github-before.png',
      'twitter': 'img/twitter-before.png',
      'linkedin': 'img/linkedin-before.png',
      'instagram': 'img/instagram-before.png'
    }
    img = hoverIcons[id]
    return host + img
  }

  var hoverEvent = function(icon){
    addEvent('mouseover', icon, function(icon){
      this.src = afterSrc(this)
    })
    addEvent('mouseout', icon, function(icon){
      this.src = beforeSrc(this)
    })
  }

  var allIcons = function(){
    var githubs = document.getElementsByClassName('github')
    var github = document.getElementById('github')
    var twitter = document.getElementById('twitter')
    var linkedin = document.getElementById('linkedin')
    var instagram = document.getElementById('instagram')
    hoverEvent(github)
    hoverEvent(githubs)
    hoverEvent(twitter)
    hoverEvent(linkedin)
    hoverEvent(instagram)
    $('.social-media').css('visibility', 'visible')
  }

  return {
    allIcons: allIcons
  }

})()

hover.allIcons()

// I N D E X ////////////////
/////////////////////////////
/////////////////////////////



// C O D E //////////////////
/////////////////////////////
/////////////////////////////



// R E E L //////////////////
/////////////////////////////
/////////////////////////////

var html5video = function(){
  return !!document.createElement('video').canPlayType
}
if(!html5video()){
  var v = $('.video-reel')
  var fallbackLink = document.createElement('p')
  fallbackLink.innerHTML = 'your browser does not support the HTML5 video tag :( check out my reel on'
    // <a href="http://vimeo.com/99774169">vimeo</a>
  v.append(fallbackLink)
}

/////////////////////////////
})(window, document)
