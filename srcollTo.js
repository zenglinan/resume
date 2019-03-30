// ==========点击导航栏跳至相应部分==========
let a = document.getElementsByClassName('navA');
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener('click', function (e) {
    e = e || window.event;
    e.preventDefault();
    let href = a[i].getAttribute('href');
    let targetEle = document.querySelector(href);
    window.scrollTo({
      top: targetEle.getBoundingClientRect().top + window.scrollY - topHeader.offsetHeight,
      behavior: 'smooth',
    })
  })
}