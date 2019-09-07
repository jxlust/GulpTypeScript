class Human {
   
    constructor() {

    }
    static showName() {
        // console.log('human');
        return 'human';
    }
}
class Man extends Human {
   
    constructor() {

    }
    static showName() {
        console.log(super.showName() + ' man');
        return super.showName() + ' man';
    }
}
Man.showName();
// let m1 = new Man();
