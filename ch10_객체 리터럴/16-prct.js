/**
 * 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
 */

var person = {
    name: 'Lee'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'Kim';

console.log(person);  // {name: "Kim"}