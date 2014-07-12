$(document).ready(function(){
console.log('hi nerds')
/////////////////////////////


// A L L ////////////////////
/////////////////////////////
/////////////////////////////

// $(window).bind("load", function() {
  var $footer, footerTop, footerHeight, bodyHeight

  footerPosition()

  function footerPosition(){
    $footer = $('footer')
    footerTop = $(window).scrollTop() + $(window).height() - footerHeight + 'px'
    footerHeight = $('footer').height()
    bodyHeight = $('.all-wrap').height()

    // debugger

    if($(window).height() > bodyHeight + footerHeight){
      $footer.css({
        position: 'absolute'
      }).animate({
        top: footerTop
      })
    }else{
      $footer.css({
        position: 'static'
      })
    }
  }

  $(window)
    .scroll(footerPosition)
    .resize(footerPosition)
// })


// I N D E X ////////////////
/////////////////////////////
/////////////////////////////



// C O D E //////////////////
/////////////////////////////
/////////////////////////////
var scale = 200
var images = $('.small-pic')

$.each(images, function(index, image){
  var w = image.offsetWidth
  var h = image.offsetHeight
  var newWidth = scale
  var newHeight = (h * scale) / w
  image.style.width = newWidth + 'px'
  image.style.height = newHeight + 'px'
})
// var size = $('.small-pic').css('width')



// R E E L //////////////////
/////////////////////////////
/////////////////////////////


/////////////////////////////
})