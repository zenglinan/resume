// ==========滚动时导航栏效果==========
window.onscroll = function () {
  (window.scrollY !== 0) ?
  (topHeader.classList.add('whiteBar')) :
  (topHeader.classList.remove('whiteBar'));
}
