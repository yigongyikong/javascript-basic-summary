/**
 * typeof 연산자는 7가지 문자열 "string", "number", "boolean",
 *  "undefined", "symbol", "object", "function" 중 하나를 반환한다.
 * "null"을 반환하는 경우는 없으며, 함수의 경우 "function"을 반환하다.
 */

typeof ''              // -> "string"
typeof 1               // -> "number"
typeof NaN             // -> "number"
typeof true            // -> "boolean"
typeof undefined       // -> "undefined"
typeof Symbol()        // -> "symbol"
typeof null            // -> "object"
typeof []              // -> "object"
typeof {}              // -> "object"
typeof new Date()      // -> "object"
typeof /test/gi        // -> "object"
typeof function () { }  // -> "function"