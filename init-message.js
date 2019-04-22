var APP_ID = 'oaFFJU138n3U8xJSnf1DY4PL-gzGzoHsz';
var APP_KEY = 'qNhNOqfsxl7nkt2lzlk6r24z';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })