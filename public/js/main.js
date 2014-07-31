var hiNerds = (function(){
  console.log('hi nerds.  your reward for snooping here is a link to my super secret tumblr: http://gemintheruff.tumblr.com/')
  console.log('also, i\'m silly: http://playvideo.herokuapp.com/')
})

var all = (function(window, document, undefined){
console.log('function hiNerds')
/////////////////////////////

// A L L ////////////////////
/////////////////////////////
/////////////////////////////

var addEvent = function(theEvent, element, func){
  if(element.addEventListener){
    element.addEventListener(theEvent, func, false)
  }else if(element.attachEvent){
    element.attachEvent('on' + theEvent, func)
  }
}

/////

var footer = (function(){

  var $footer, footerHeight, pageHeight

  var position = function(){
    $footer = $('.social-media')
    footerHeight = $('.social-media').height()
    // pageHeight = $('.all-wrap').height() + 141 // need to figure out why
    // this doesn't work on page load...
    if($(window).height() > $('.all-wrap').height() + 141 + footerHeight){
      $footer.css({
        position: 'absolute'
      }).animate({
        top: $(window).scrollTop() + $(window).height() - footerHeight + 'px'
      }, 1)
    }else{
      $footer.css({
        position: 'static'
      })
    }
  }

  return {
    position: position
  }

})()

/////

var hover = (function(){

  // var host = 'http://localhost:4567/'
  var host = 'http://vanessa.rhymeswithart.com/'

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

/////

footer.position()
$(window)
  .scroll(footer.position)
  .resize(footer.position)

hover.allIcons()

// I N D E X ////////////////
/////////////////////////////
/////////////////////////////



// C O D E //////////////////
/////////////////////////////
/////////////////////////////

// images
// var imagess = (function(){
//   var scale = 200
//   var images = $('.small-pic')
//   var resize = function(){
//     $.each(images, function(index, image){
//       var w = image.offsetWidth
//       var h = image.offsetHeight
//       var newWidth = scale
//       var newHeight = (h * scale) / w
//       image.style.width = newWidth + 'px'
//       image.style.height = newHeight + 'px'
//     })
//   }
//   return {
//     resize: resize
//   }
// })()

// imagess.resize()
// github cal


// R E E L //////////////////
/////////////////////////////
/////////////////////////////
  debugger

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
