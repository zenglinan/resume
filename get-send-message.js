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
    bindSumbitEvent() {
      postMessageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let message = this.messageInput.value;
        if (message === "") { alert("留言不能为空"); return; }
        else {
          this.addMessage(message);
          model.save(message)
            .then((response) => {
              alert('Send success!');
              this.messageInput.value = "";
            })
        }
      })
    },
    loadMessage() {
      model.fetch()
        .then(function (responseArr) {
          let dataArr = responseArr.reverse().map((ele) => {
            return ele["_serverData"]["message"];
          })
          dataArr.forEach((dataEle) => {
            controller.show(dataEle);
          })
        })
    },
    show(dataEle) {
      let li = document.createElement('li');
      li.textContent = dataEle;
      commentList.appendChild(li);
    },
    init() {
      this.view = view;
      this.model = model;
      this.messageInput = postMessageForm.querySelector('textarea#postMessage');
      this.bindSumbitEvent();
      this.loadMessage();
      this.model = model
    },
    addMessage(message) {
      let li = document.createElement('li');
      li.textContent = message;
      commentList.prepend(li)
    }
  }
  controller.init(view, model);
}.call()
