interface Person {
  firstName: string;
  lastName: string;
}

function greeter2(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter2(user3);

interface infoConfit {
  id: number;
  name: string;
  sex?: number;
  score?: number;
}
interface rInfo{
  name: string;
  score: number;
}

function getInfo(conf:infoConfit):rInfo {
    let info = {name: '',score: 0};
    info.name = conf.name || '';
    info.score = conf.score ? (conf.score * 20): 0;
    return info;
}
console.log('getinfo', getInfo({id:0,name:'小李子',score: 100}));