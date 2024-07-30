interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}

interface T1 {
    [a: string]: Dog;
    [b: number]: Animal; // Error
}

interface T2 {
    [a: string]: Animal;
    [b: number]: Dog; // OK
}