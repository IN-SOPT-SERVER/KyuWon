interface member {
    name: string;
    age: number;
    favorite: string;
    city: string;
    mbti: string;
}

const members: member[] = [
    {
        name: '강수현',
        age : 24,
        city: '서울역',
        favorite: '해산물',
        mbti: 'intp'
    }, 
    {
        name: '현세빈',
        age : 24,
        city: '청구역',
        favorite: '소주',
        mbti: 'entp'
    }, 
    {
        name: '강민재',
        age : 24,
        city: '상암',
        favorite: '스시',
        mbti: 'enfp'
    }, 
]

members.map((member) => {
    console.log(`안녕하세요 이름은 ${member.name}입니다. 나이 ${member.age}이고 ${member.city}에 살고 있습니다.
        ${member.favorite}를 좋아하고 mbti는 ${member.mbti}입니다. 잘 부탁드려요!`)
    
})

