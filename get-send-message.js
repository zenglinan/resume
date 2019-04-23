!function () {
  let view = document.getElementById('comment');
  let model = {
    save(message) {
      var userLeaveMessage = AV.Object.extend('userLeaveMessage');
      var messageObject = new userLeaveMessage();
      return messageObject.save({
        'message': message
      })
    },
    fetch() {
      var query = new AV.Query('userLeaveMessage');
      return query.find()
    }
  }
  let controller = {
    view: null,
    model: null,
    show(dataEle) {
      let li = document.createElement('li');
      li.textContent = dataEle;
      commentList.appendChild(li);
    },
    bindSumbitEvent() {
      postMessageForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        console.log(this) // 这里如果不写成箭头函数  this有问题
        let message = this.messageInput.value;
        if (message === "") { alert("留言不能为空"); return; }
        else {
          model.save(message)
            .then(function (response) {
              alert('Send success!');
              this.messageInput.value = "";
            })
        }
      })
    },
    loadMessage() {
      console.log(model.fetch)
      model.fetch()
        .then(function (responseArr) {
          console.log('here')
          let dataArr = responseArr.map((ele) => {
            console.log(dataArr)
            return ele["_serverData"]["message"];
          })
          dataArr.forEach((dataEle) => {
            console.log(this) // 老师为何这里的this指向window
            controller.show(dataEle);
          })
        })
    },
    init() {
      this.view = view;
      this.model = model;
      this.messageInput = postMessageForm.querySelector('textarea#postMessage');
      this.bindSumbitEvent();
      this.loadMessage();
    },

  }
  controller.init(view);
}.call()
