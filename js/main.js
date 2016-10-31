var hiNerds = (function(){
  console.log('hi nerds.  your reward for snooping here is a link to my super secret tumblr: http://gemintheruff.tumblr.com/');
  console.log('also, i\'m silly: http://playvideo.herokuapp.com/');
  console.log('check back soon for some sweet ascii art');

})

var all = (function(window, document, undefined){
console.log('function hiNerds')
/////////////////////////////

// A L L ////////////////////
/////////////////////////////
/////////////////////////////

var textNameCanvas = document.createElement('canvas');
textNameCanvas.style.position = 'absolute';
textNameCanvas.style.margin = '60% 0 0';
var bgInsert = document.getElementsByClassName('bg')[0];
document.getElementsByClassName('main')[0].insertBefore(textNameCanvas, bgInsert);
textNameCanvas.width = 300;
textNameCanvas.height = 300;

var textNameCanvasContext = textNameCanvas.getContext('2d');

var dotMatrix = textNameCanvasContext;
dotMatrix.fillStyle = '#b2321e';
var rows = 7
var cols = 10;
var radius = 6;
var xIncrement = textNameCanvas.width/cols;
var yIncrement = textNameCanvas.height/rows;

for (var i = 1; i < rows; i++) {
  for (var j = 1; j < cols; j++) {
    var center = [xIncrement * j, yIncrement * i];
    dotMatrix.beginPath(); // this effects rasteration... its interesting
    dotMatrix.moveTo(center[0], center[1]);
    dotMatrix.arc(center[0], center[1], radius + j, 0, 2 * Math.PI, false);
    dotMatrix.fill();
    dotMatrix.closePath();
  }
}

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
