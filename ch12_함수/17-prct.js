/**
 * 매개변수는 함수 몸체 내부에서만 참조할 수 있고 함수 몸체 외부에서는 참조할 수 없다.
 * 즉, 매개변수의 스코프는 함수 내부다.
 */

function add(x, y) {
    console.log(x, y); // 2 5
    return x + y;
}

add(2, 5);

// add 함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined