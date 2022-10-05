/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

interface Member {
    name: string;
    group: string;
    favoriteFood?: string;
}

interface Dinner {
    member: Member[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}

interface Group {
  members: string[];
  menu: string | undefined;
}

const dinner: Dinner = {
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
        group: "yb",
      },
      {
        name: "권세빈",
        group: "ob",
      },
      {
        name: "강민재",
        group: "ob",
      },
      {
        name: "깍두기",
        group: "yb",
      }
    ],
    shuffle(array: Member[]): Member[] {
      array.sort(() => Math.random() - 0.5);
      return array;
    },
    organize(array: Member[]): void {
      this.shuffle(array);
      // 1. 두명씩 짝을 지어 조 만들기. 
      // 2. 조원 중 favoriteFood를 랜덤으로 메뉴 지정. but 아무도 favoriteFood가 없다면 undefined으로 리턴
      // 3. 조원 중 한명 이상은 ob여야함
      
      // 예시 답안
      
      let result: Group[] = []
      // ob yb 구별하기
      const obList = dinner.member.filter((member) => member.group == "ob");
      const ybList = dinner.member.filter((member) => member.group == "yb");

      // ob-yb 짝 만들기
      const groups = obList.map((ob, idx) => [ob, ybList[idx]] );
      // console.log(groups)
      groups.forEach((group) => {
        // console.log(group.map((e)=> console.log(e.favoriteFood)))
        const foodList = group.map((member)=> member.favoriteFood).filter((food)=> !undefined)
        const menu = foodList[Math.floor(Math.random() * foodList.length)]
        result.push({
          members: group.map((elem)=> elem.name),
          menu: menu
        })
      });
      result.map((group, idx)=> {
        console.log(`${idx+1} 번째 그룹은 ${JSON.stringify(group.members)}이고 ${group.menu}를 먹습니다`)
      })
    },
  };
  
  dinner.organize(dinner.member);

// 예시 출력
// 1 번째 그룹은 ["권세빈","깍두기"]이고 undefined를 먹습니다
// 2 번째 그룹은 ["강민재","강수현"]이고 undefined를 먹습니다
// 3 번째 그룹은 ["권세훈","김규원"]이고 회를 먹습니다