/**
 * Object.definProperty 메서드로 프로퍼티를 정의할 때
 *  프로퍼티가 디스크립터 객체의 프로퍼티를 일부 생략할 수 있다.
 * 프로퍼티 디스크립터 객체에서 생략된 어트리뷰트는 다음과 같이 기본값이 적용된다.
 * 프로퍼티 디스크립터 객체의 프로퍼티 | 대응하는 프로퍼티 어트리뷰트 | 생략했을 때의 기본값
 * value | [{Value}] | undefined
 * get | [{Get}] | undefined
 * set | [{Set}] | undefined
 * writable | [{Writable}] | false
 * enumerable | [{Enumerable}] | false
 * configurable | [{Configurable}] | false
 * 
 * Object.definProperty 메서드는 한번에 하나의 프로퍼티만 정의할 수 있다.
 * Object.definProperties 메서드는 사용하면 여러 개의 프로퍼티를 한 번에 정의할 수 있다.
 */

const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: 'Ungmo',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
        // getter 함수
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        // setter 함수
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = 'Heegun Lee';
console.log(person);
    // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }