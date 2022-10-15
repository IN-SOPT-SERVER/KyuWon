/*
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/
var dinner = {
    member: [
        {
            name: "권세훈",
            group: "ob",
            favoriteFood: "회"
        },
        {
            name: "김규원",
            group: "yb",
            favoriteFood: "삼겹살"
        },
        {
            name: "강수현",
            group: "yb"
        },
        {
            name: "권세빈",
            group: "ob"
        },
        {
            name: "강민재",
            group: "ob"
        },
        {
            name: "깍두기",
            group: "yb"
        }
    ],
    shuffle: function (array) {
        array.sort(function () { return Math.random() - 0.5; });
        return array;
    },
    organize: function (array) {
        this.shuffle(array);
        // 1. 두명씩 짝을 지어 조 만들기. 
        // 2. 조원 중 favoriteFood를 랜덤으로 메뉴 지정. but 아무도 favoriteFood가 없다면 undefined으로 리턴
        // 3. 조원 중 한명 이상은 ob여야함
        // 예시 답안
        var result = [];
        // ob yb 구별하기
        var obList = dinner.member.filter(function (member) { return member.group == "ob"; });
        var ybList = dinner.member.filter(function (member) { return member.group == "yb"; });
        // ob-yb 짝 만들기
        var groups = obList.map(function (ob, idx) { return [ob, ybList[idx]]; });
        // console.log(groups)
        groups.forEach(function (group) {
            // console.log(group.map((e)=> console.log(e.favoriteFood)))
            var foodList = group.map(function (member) { return member.favoriteFood; }).filter(function (food) { return !undefined; });
            var menu = foodList[Math.floor(Math.random() * foodList.length)];
            result.push({
                members: group.map(function (elem) { return elem.name; }),
                menu: menu
            });
        });
        result.map(function (group, idx) {
            console.log("".concat(idx + 1, " \uBC88\uC9F8 \uADF8\uB8F9\uC740 ").concat(JSON.stringify(group.members), "\uC774\uACE0 ").concat(group.menu, "\uB97C \uBA39\uC2B5\uB2C8\uB2E4"));
        });
    }
};
dinner.organize(dinner.member);
// 예시 출력
// 1 번째 그룹은 ["권세빈","깍두기"]이고 undefined를 먹습니다
// 2 번째 그룹은 ["강민재","강수현"]이고 undefined를 먹습니다
// 3 번째 그룹은 ["권세훈","김규원"]이고 회를 먹습니다
