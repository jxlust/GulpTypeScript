let demo1 = {
    name: 'hhh',
    say: function (msg, num) {
      console.log('i love' + this.name + '---' + msg + '---' + num);
    }
  }
  demo1.say('zz');
  let obj1 = {
    name: 'lili'
  }
  let fn = demo1.say.bind(obj1, 'pppp');
  fn('666');

  //call apply
  let d = demo1.say.call(obj1, 'jxl');
  console.log(111,d);

  
  