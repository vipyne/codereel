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

// var c=document.getElementById("myCanvas");
// var ctx=c.getContext("2d");

// ctx.font="20px Georgia";
// ctx.fillText("Hello World!",10,50);

// ctx.font="30px Verdana";
// // Create gradient
// var gradient=ctx.createLinearGradient(0,0,c.width,0);
// gradient.addColorStop("0","magenta");
// gradient.addColorStop("0.5","blue");
// gradient.addColorStop("1.0","red");
// // Fill with gradient
// ctx.fillStyle=gradient;
// ctx.fillText("Big smile!",10,90);

// ctx.beginPath();
//                     ctx.arc(x,y, radius, 0, 2 * Math.PI, false);
//                     ctx.clip();
//                     ctx.drawImage(img,0,0,

var textNameCanvas = document.createElement('canvas');
textNameCanvas.width = 300;
textNameCanvas.height = 300;

var textNameCanvasContext = textNameCanvas.getContext('2d');

var dotMatrix = textNameCanvasContext;


var rows = 5;
var cols = 10



for (var i = 1; i < rows; i++) {
  for (var j = 1; j < cols; j++) {
    var center = [textNameCanvas.width/j, textNameCanvas.height/i];
    dotMatrix.moveTo(center[0], center[1]);
    console.log('center', center);
    dotMatrix.arc(center[0], center[1], 10, 0, (2 * Math.PI), false);
    dotMatrix.fill();
  }
}

console.log('derp')

// textNameCanvasContext.font = '30px Arial';
// dotMatrix.beginPath();
// dotMatrix.arc(10, 10, 7.5, 0, (2 * Math.PI), false);
// dotMatrix.fillStyle = '#a5251c';
// // dotMatrix.fillcolor('rgb(165, 37, 28)');
// dotMatrix.fill();
// // dotMatrix.fillStyle(dotMatrix);

document.getElementsByClassName('main')[0].append(textNameCanvas);

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
