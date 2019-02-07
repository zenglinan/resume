let headerTop = document.getElementsByTagName('header')[0];

window.onscroll = function () {
  (getScrollOffset().y !== 0) ?
  (handleBar(true)) :
  (handleBar(false));
}
function getScrollOffset(){
  if(window.pageXOffset){
      return {
          x : window.pageXOffset,
          y : window.pageYOffset
      }
  }
  else{
      return {
          x : document.body.scrollLeft + document.documentElement.scrollLeft,
          y : document.body.scrollTop + document.documentElement.scrollTop
      }
  }
}
function handleBar (show) {
  (show === true) ?
  headerTop.classList.add('whiteBar') :
  headerTop.classList.remove('whiteBar');
}