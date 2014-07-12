$(document).ready(function(){
console.log('hi nerds')
/////////////////////////////


// A L L ////////////////////
/////////////////////////////
/////////////////////////////

// $(window).bind("load", function() {
  var $footer, footerHeight

  function footerPosition(){
    console.log('poop')
    $footer = $('footer')
    footerHeight = $('footer').height()

    if($(window).height() > $('.all-wrap').height() + footerHeight){
      console.log('yup')
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

  footerPosition()
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