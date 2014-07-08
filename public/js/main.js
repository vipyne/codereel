$(document).ready(function(){
/////////////////////////////

var scale = 200
var images = $('.small-pic')
console.log('images', images)

$.each(images, function(index, image){
  var w = image.offsetWidth
  var h = image.offsetHeight
  var newWidth = scale
  var newHeight = (h * scale) / w
  image.style.width = newWidth + 'px'
  image.style.height = newHeight + 'px'
  console.log('w', w)
  console.log('w', w)
  console.log('newWidth', newWidth)
  console.log('newHeight', newHeight)
})
var size = $('.small-pic').css('width')
console.log('size', size)




/////////////////////////////
})