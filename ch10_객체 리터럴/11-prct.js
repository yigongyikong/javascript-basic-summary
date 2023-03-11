/**
 * 자바스크립트의 함수는 객체(일급 객체)다.
 * 따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다.
 * 메서드 내부에서 사용한 this 키워드는 객체 자신을 가리키는 참조변수다.
 */

var circle = {
    radius: 5, // ← 프로퍼티

    // 원의 지름
    getDiameter: function () { // ← 메서드
        return 2 * this.radius; // this는 circle을 가리킨다.
    }
};

console.log(circle.getDiameter()); // 10