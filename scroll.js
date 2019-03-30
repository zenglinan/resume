// ==========滚动时导航栏效果==========
let aNav = document.getElementsByClassName('navA');
let aTarget = document.querySelectorAll("[aTarget]");
console.log()
window.onscroll = function () {
  (window.scrollY !== 0) ?
    (topHeader.classList.add('whiteBar')) :
    (topHeader.classList.remove('whiteBar'));
  let index = 0;
  for (let i = 0; i < aTarget.length; i++) {
    if (Math.abs(aTarget[i].getBoundingClientRect().top) < Math.abs(aTarget[index].getBoundingClientRect().top)){
      index = i;
    }
  }
  for(let j = 0; j < aTarget.length; j ++){
    aNav[j].classList.remove("active");
  }
  aNav[index].classList.add("active");
}
