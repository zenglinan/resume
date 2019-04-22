let dataArr;
let postMessage = postMessageForm.querySelector('#postMessage');
postMessageForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let message = postMessage.value;
  if (message === "") { alert("留言不能为空"); return; }
  var userLeaveMessage = AV.Object.extend('userLeaveMessage');
  var messageObject = new userLeaveMessage();
  messageObject.save({
    'message': message
  }).then(function (response) {
    alert('Send success!');
    postMessage.value = "";
  })
})
var query = new AV.Query('userLeaveMessage');
query.find().then(function (responseArr) {
  dataArr = responseArr.map((ele) => {
    return ele["_serverData"]["message"];
  })
  dataArr.forEach((dataEle)=>{
    let li = document.createElement('li');
    li.textContent = dataEle;
    commentList.appendChild(li);
  })
})