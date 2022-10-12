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

export {Group, Member, Dinner}