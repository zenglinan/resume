// ==========滚动时导航栏效果==========
!function () {
  let view = document.querySelectorAll("[atarget]");
  let model = {
    getScrollY() {
      return window.scrollY;
    }
  };
  let controller = {
    view: null,
    model: null,
    aNav: document.getElementsByClassName('navA'),
    topIndex: 0,
    init() {
      this.view = view;
      this.model = model;
      this.initPage();
      this.bindScrollEvent();
    },
    initPage() {
      // 刚加载页面的时候从下往上出现第一个模块
      setTimeout(() => {
        this.view[0].classList.remove('offset');
      }, 600);
    },
    bindScrollEvent() {
      window.onscroll = () => {
        (model.getScrollY() !== 0) ?
          (topHeader.classList.add('whiteBar')) :
          (topHeader.classList.remove('whiteBar'));
        this.findTheTopIndex(this.topIndex);  // 找到距离页面最顶部的元素
        this.handleTheTop(this.topIndex); // 标红最顶部模块的对应链接，并使该模块从下往上出现
      }
    },
    findTheTopIndex(index) {
      for (let i = 0; i < this.view.length; i++) {
        if (Math.abs(this.view[i].getBoundingClientRect().top) < Math.abs(this.view[index].getBoundingClientRect().top)) {
          this.topIndex = i;
        }
      }
    },
    handleTheTop(index) {
      for (let j = 0; j < this.aNav.length; j++) {
        this.aNav[j].classList.remove("active");
      }
      this.aNav[index].classList.add("active");
      this.view[index].classList.remove('offset');
    }
  }

  controller.init(view, model);

}()
