let bonus = 20;


function sum(first, second) {
    let result = first + second + bonus;
    console.log(bonus);
    if(result > 9){
        var mood = "Happy";
        mood = "fishy";
        mood = "funky";
        mood = "Cranky"
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(3, 7);
console.log(output);
console.log(bonus);