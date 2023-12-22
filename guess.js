//variables
let minNum = 1;
let maxNum = 10;
let answer = Math.floor(Math.random() * minNum * maxNum);
let result = document.getElementById('result');

//guess
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let inputResult = document.getElementById('result').innerHTML = answer;
    
    if(input === answer){
        alert("Number guessed correctly!");
    }else{
        alert("wrong number!");
    }
    if(input === NaN){
        alert("numbers only!");
    }
    if(input < minNum || input > maxNum){
        alert("numbers to guess are between 1 - 10");
    }
})

//retry button
let retry = document.getElementById('retry-btn');

retry.addEventListener('click', function(){
    location.reload();
})