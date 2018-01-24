let myAge: number = 21;
let myName: string = "Michelle";
let myDOB: number[] = [6, 10, 96];

function details(a: number, n: string, d: number[]){
    console.log("My name: " + n + "\nMy age: " + a + "\nMy date of birth: " + d);
}

details(myAge, myName, myDOB);