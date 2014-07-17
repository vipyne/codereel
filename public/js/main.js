$(document).ready(function(){
console.log('hi nerds')
/////////////////////////////


// A L L ////////////////////
/////////////////////////////
/////////////////////////////
var $footer, footerHeight

function footerPosition(){
  $footer = $('footer')
  footerHeight = $('footer').height()

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

footerPosition()
$(window)
  .scroll(footerPosition)
  .resize(footerPosition)

// I N D E X ////////////////
/////////////////////////////
/////////////////////////////



// C O D E //////////////////
/////////////////////////////
/////////////////////////////
var scale = 200
var images = $('.small-pic')

console.log('oposifjaoisjfoiWOAFIJ')
$.each(images, function(index, image){
  var w = image.offsetWidth
  var h = image.offsetHeight
  var newWidth = scale
  var newHeight = (h * scale) / w
  image.style.width = newWidth + 'px'
  image.style.height = newHeight + 'px'
})

$.ajaxSetup({
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/javascript' }
})

$.ajax({
  url: 'https://github.com/users/vipyne/contributions_calendar_data',
  dataType: 'jsonp',
  // contentType: 'application/json',
  // mimeType: 'application/json'
  beforeSend: function( xhr ) {
    xhr.overrideMimeType( "application/json" )
  }
})
  .done(function(data){
    console.log('data', data)
  })
  x.fail(function(msg){
    console.log('error', msg.responseText)
  })

// R E E L //////////////////
/////////////////////////////
/////////////////////////////


/////////////////////////////
})