/**
 * person1 과 person2가 가리키는 객체는 비록 내용은 같지만 다른 메모리에 저장된 별개의 객체다.
 * 하지만 person1.name과 person2.name은 모두 원시값 'Lee'를 저장한 메모리를 가리킨다.
 */

var person1 = {
    name: 'Lee'
};

var person2 = {
    name: 'Lee'
};

console.log(person1 === person2); // ① false
console.log(person1.name === person2.name); // ② true