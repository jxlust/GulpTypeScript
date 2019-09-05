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
  demo1.say.call(obj1, 'jxl');
  let fn = demo1.say.bind(obj1, 'pppp');
  console.log(fn('666'));
  
  