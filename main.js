"use strict"

class First {
    hello(){
        console.log("Привет, я метод родителя");
    }
}

class Second extends First {
    helloChildren(){
        super.hello()
        console.log('А я наследуемый метод!');
    }
}

const startFunc = new Second()
startFunc.helloChildren()