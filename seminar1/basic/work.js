var members = [
    {
        name: '강수현',
        age: 24,
        city: '서울역',
        favorite: '해산물',
        mbti: 'intp'
    },
    {
        name: '현세빈',
        age: 24,
        city: '청구역',
        favorite: '소주',
        mbti: 'entp'
    },
    {
        name: '강민재',
        age: 24,
        city: '상암',
        favorite: '스시',
        mbti: 'enfp'
    },
];
members.map(function (member) {
    console.log("\uC548\uB155\uD558\uC138\uC694 \uC774\uB984\uC740 ".concat(member.name, "\uC785\uB2C8\uB2E4. \uB098\uC774 ").concat(member.age, "\uC774\uACE0 ").concat(member.city, "\uC5D0 \uC0B4\uACE0 \uC788\uC2B5\uB2C8\uB2E4.\n        ").concat(member.favorite, "\uB97C \uC88B\uC544\uD558\uACE0 mbti\uB294 ").concat(member.mbti, "\uC785\uB2C8\uB2E4. \uC798 \uBD80\uD0C1\uB4DC\uB824\uC694!"));
});
