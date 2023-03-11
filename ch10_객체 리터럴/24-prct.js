/**
 * ES6에서 메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.
 */

// ES6
const obj = {
    name: 'Lee',
    // 메서드 축약 표현
    sayHi() {
        console.log('Hi! ' + this.name);
    }
    // ES6의 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 동작한다.
};

obj.sayHi(); // Hi! Lee