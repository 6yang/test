function People(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
}


People.sayHello =function(){
    console.log(this.name + this.sex + this.age);
}
//此时，People就被视为构造函数，可以用new来实例化了。
module.exports = People;
