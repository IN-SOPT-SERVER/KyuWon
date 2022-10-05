// function scope 
// 유효범위가 함수범위내여서 그 밖으로 나가지 못함
// 전역함수 외부에서 선언한 변수는 모두 전역변수
if(true) {
    var test1JS = 'var!';
    console.log(test1);
}
console.log(test1JS)

// block scope
// {} 안에 해당하는 범위
// 호이스팅의 문제로 블록레벨 스코프 변수 선언을 선호한다.
if(true) {
    let test2 = 'var!';
    console.log(test2);
}
console.log(test2)


// 원시 타입
// 메모리에 고정 크기로 값을 저장하고, 해당 저장 값을 변수가 직접 가지고 있음
// number, string, boolean, symbol, null 과 undefined

// 객체 타입
// 크기가 정해져있지 않고 변수 할당시 데이터 주소만 저장
// Object (function, array)
const user = {
    email : "kyuwon@domain.com",
    name: "김규원",
    favorite: ['집1', '집2', '집3'],
    introduce: () => {
        console.log(`${this.name}은 ${this.favorite}를 좋아해요`)
    },
    getFavoriteFoods: () => {
        this.favorite.forEach((elem) => {
            console.log(`${elem}가 좋아요`)
        })
    }
}

// array
const arr1 = ['규원', '라면', 25, false]
console.log(arr1)
const arr2 = Array(1, null, undefined, 10, '하이')

arr1.map((item) => {
    console.log(`아이템 하나 씩 출력하기 ${item}`)
})

// function 선언 방법
// 함수 선언식
function hello(name) {
    console.log(`안녕하세요 ${name}`)
}

// 함수 표현식
const sumJS = (a, b) => {
    console.log(a+b);
}

hello('규원')
sumJS(1,2);

console.log(typeof '규원')

// nodeJS 란...
// 1. Single Thread
// 프로세스 내 하나의 쓰레드가 하나의 요청만을 수행하는 것 (싱글 스레드 블로킹 모델)
// (멀티 스레드는 요청이 들어오는 수대로 쓰레드를 잡아다가 요청을 전부 수행)

// 2. Event Driven
// call stack : 실행 되는 함수들이 스택 구조로 쌓이는 공간
// background : 실제 로직이 실행되는 공간
// event loop : 콜백 큐에 잌ㅅ는 콜백함수를 콜 스택으로 전달. 콜 스택이 비어있는 경우에만
// callback queue : 이벤트 발생 후 콜백 함수들이 기다리는 공간
