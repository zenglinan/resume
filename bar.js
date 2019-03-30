// ==========作品集的bar==========
let option = document.getElementsByClassName("option")[0];
let barInner = document.getElementsByClassName("bar-inner")[0];
option.addEventListener('click', function (e) {
  e = e || window.event;
  let target = e.target || e.srcElement;
  if (target.tagName === 'SPAN') {
    let index = [].indexOf.call(option.children,target) + 1;
    barInner.classList = 'bar-inner';
    barInner.classList.add(`barStatus${index}`);
  }
}, false);