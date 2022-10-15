// typescript 변수 선언
const test1: string = 'hello';
console.log(typeof test1, test1);

const test2: number = 3;
console.log(typeof test2, test2);

const test3: boolean = true;
console.log(typeof test3, test3);

// 배열 타입 선언
// let array: number[] = [1,2,'hello']; // number 가 아닌 element 때문에 에러뜸
// console.log(typeof array, array);
const arr: Array<string> = ['a', 'b', 'c']

// Object vs object 차이점
// Object : 자바스크립트 객체와 동일
// object : 타입스크립트에서 추가된 객체 타입으로 원시 타입이 아닌 타입만 할당할 수 있다.
const foo1 = (a: Object) => {
    console.log(a)
}

const foo2 = (a: object) => { // 원시 타입을 제외한 것들만 들어갈 수 있다
    console.log(a)
}

foo1('hello')
// foo2('hello') 원시타입이 들어갔기 때문에 오류 발생!

//함수 타입 표현
const sum = (a: number, b: number): number => {
    return a+b;
}

// 타입 단언
// 1. as 타입 단언
const test: any = '회장님';
const nameLength = (test as string).length
console.log(nameLength);

// 2. <> 타입 단언
const test12: any = '규원';
const nameLength12 = (<string>test12).length;
console.log(nameLength12)

// interface
interface SOPT {
    name: string;
    age: number;
    isSOPT: boolean;
    money?: number; // 선택적 프로퍼티
}

const introduce: SOPT = {
    name: '김규원',
    age: 18,
    isSOPT: true
}

const introduces: SOPT[] = [{
    name: '김규원',
    age: 18,
    isSOPT: true
},
{
    name: '다른애',
    age: 20,
    isSOPT: false
}]
