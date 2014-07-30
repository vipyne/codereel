(function(window, document, undefined){
console.log('hi nerds')
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

  var $footer, footerHeight

  var position = function(){
    $footer = $('.social-media')
    footerHeight = $('.social-media').height()

    if($(window).height() > $('.all-wrap').height() + footerHeight){
      $footer.css({
        position: 'absolute'
      }).animate({
        top: $(window).scrollTop() + $(window).height() - footerHeight + 'px'
      }, 10)
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

footer.position()
$(window).scroll(footer.position()).resize(footer.position())

/////

var icons = (function(){

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
    return 'http://localhost:9393/' + hover
  }

  var beforeSrc = function(icon){
    var hover
    var id = icon.getAttribute('id')
    var hoverIcons = {
      'github': 'img/github-before.png',
      'twitter': 'img/twitter-before.png',
      'linkedin': 'img/linkedin-before.png',
      'instagram': 'img/instagram-before.png'
    }
    hover = hoverIcons[id]
    return 'http://localhost:9393/' + hover
  }

  var hover = function(icon){
    addEvent('mouseover', icon, function(icon){
    // icon.addEventListener('mouseover', function(icon){
      this.src = afterSrc(this)
    })
    addEvent('mouseout', icon, function(icon){
    // icon.addEventListener('mouseout', function(icon){
      this.src = beforeSrc(this)
    })
  }

  return {
    hover: hover
  }

})()

var github = document.getElementById('github')
var twitter = document.getElementById('twitter')
var linkedin = document.getElementById('linkedin')
var instagram = document.getElementById('instagram')

icons.hover(github)
icons.hover(twitter)
icons.hover(linkedin)
icons.hover(instagram)

// I N D E X ////////////////
/////////////////////////////
/////////////////////////////



// C O D E //////////////////
/////////////////////////////
/////////////////////////////

// images
var images = (function(){
  var scale = 200
  var images = $('.small-pic')
  var resize = function(){
    $.each(images, function(index, image){
      var w = image.offsetWidth
      var h = image.offsetHeight
      var newWidth = scale
      var newHeight = (h * scale) / w
      image.style.width = newWidth + 'px'
      image.style.height = newHeight + 'px'
    })
  }
  return {
    resize: resize
  }
})

images.resize()
// github cal


// R E E L //////////////////
/////////////////////////////
/////////////////////////////


/////////////////////////////
})(window, document)