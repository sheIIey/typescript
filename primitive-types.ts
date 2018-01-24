let myAge: number = 21;
let myName: string = "Michelle";
let myDOB: number[] = [6, 10, 96];
let question: boolean = false;

function details(a: number, n: string, d: number[], q: boolean){
    console.log("My name: " + n + "\nMy age: " + a + "\nMy date of birth: " + d + 
    "\nDoes lightning strike twice in the one place? " + q) ;
}

details(myAge, myName, myDOB, question);