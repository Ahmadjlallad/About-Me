'use strict'

let arr_index = 0;
let scoreA = [];
let score = 0;

let welcome_message = 'Welcome To My website, Can You give me your First & Last Name? Please';
let user_name = prompt(welcome_message);
while (!user_name) {
    alert('Please Enter your Name')
    user_name = prompt(welcome_message);
}
let glad = 'I am glad to see here ' + user_name;

// console.log(glad);
alert(glad)
document.getElementById('welcome').innerHTML = glad;
let questions_one = 'Do I Like programing?';
let questions_two = 'Do Like Video Games?';
let questions_three = 'Did I study as Engineering degree?';
let questions_fore = 'Do I like snapchat?';
let questions_five = 'Do I like mansaf (منسف)?';
let user_ans = prompt(questions_one, 'Please Answer By Yes or Y same for No');
// console.log(user_ans.toLowerCase());

function checker_f(user_inp) {
    let x1 = (user_inp.toLowerCase() == 'yes' || user_inp.toLowerCase() == 'y');
    let y1 = (user_inp.toLowerCase() == 'no' || user_inp.toLowerCase() == 'n');
    let z = x1 || y1;
    console.log(user_inp);
    console.log(x1);
    console.log(!z);
    return !z;

}
function validation(user_inp, Qus) {
    while (checker_f(user_inp)) {
        console.log(checker_f(user_inp))
        alert('please answer by \'yes\' or \'no\'');
        user_inp = prompt(Qus)
        console.log(user_inp);
    }
    return user_inp
}
user_ans = validation(user_ans.toLowerCase(), questions_one);
console.log(checker_f(user_ans.toLowerCase(), user_ans.toLowerCase(),));
console.log(user_ans.toLowerCase());


function Qus1(Qus1_b) {
    if (Qus1_b.toLowerCase() === 'yes' || Qus1_b.toLowerCase() === 'y') {
        alert('you are correct');
        score++
        scoreA[arr_index++] = 'your answer was correct'
    } else if (Qus1_b.toLowerCase() === 'no' || Qus1_b.toLowerCase() === 'n') {
        alert('wrong answer I don\'t like it')
        scoreA[arr_index++] = 'your answer was Wrong'
    }

}
Qus1(user_ans)

let user_ans2 = prompt(questions_two, 'Please Answer By Yes or Y same for No');
// console.log(user_ans2);
user_ans2 = validation(user_ans2.toLowerCase(), questions_two);

function Qus2(Qus2_b) {
    

switch (Qus2_b.toLowerCase()) {
    case "yes":
    case 'y':
        alert('well done, you are right')
        scoreA[arr_index++] = 'your answer was correct'
        score++

        break;

    case "no":
    case "n":
        alert('wrong answer I don\'t like it')
        scoreA[arr_index++] = 'your answer was Wrong'
        break;

}
}
Qus2(user_ans2)

let user_ans3 = prompt(questions_three, 'Please Answer By Yes or Y same for No');
// console.log(user_ans3);
user_ans3 = validation(user_ans2.toLowerCase(), questions_three);
function Qus3(Qus3_b) {
    


switch (Qus3_b.toLowerCase()) {
    case "yes":
    case 'y':
        alert('well done, you are right')
        scoreA[arr_index++] = 'your answer was correct'
        score++
        break;

    case "no":
    case "n":
        alert('wrong answer I don\'t like it')
        scoreA[arr_index++] = 'your answer was Wrong'
        break;

};
}
Qus3(user_ans3) 


let user_ans4 = prompt(questions_fore, 'Please Answer By Yes or Y same for No');
// console.log(user_ans4);
user_ans4 = validation(user_ans4.toLowerCase(), questions_fore);
function Qus4(Qus4_b) {
    


switch (Qus4_b.toLowerCase()) {
    case "yes":
    case 'y':
        alert('wrong answer I don\'t like it')
        scoreA[arr_index++] = 'your answer was Wrong'
        break;

    case "no":
    case "n":
        alert('well done, you are right')
        scoreA[arr_index++] = 'your answer was correct'
        score++
        break;

};
}
Qus4(user_ans4)
let user_ans5 = prompt(questions_five, 'Please Answer By Yes or Y same for No');
// console.log(user_ans5);
user_ans5 = validation(user_ans5.toLowerCase(), questions_five);
function Qus5(Qus5_b) {
    

switch (Qus5_b.toLowerCase()) {
    case "yes":
    case 'y':
        alert('well done, you are right')
        score++
        scoreA[arr_index++] = 'your answer was correct'
        break;

    case "no":
    case "n":
        alert('wrong answer I don\'t like it')
        scoreA[arr_index++] = 'your answer was Wrong'
        break;

};
}
Qus5(user_ans5)
let ges_ans
console.log(typeof (ges_ans));

function Qus6(Qus6_b) {
    

for (let i = 0; i < 4; i++) {
    Qus6_b = parseInt(prompt('Guess a Number between 1 - 9.'));
    while (Qus6_b >= 10 || !Qus6_b) {
        console.log(Qus6_b);
        alert('please enter a number between 1 - 9')
        Qus6_b = parseInt(prompt('guess a number.'));
    }
    switch (Qus6_b) {
        case 8:
        case 9:
        case 7:
            alert('Too High');
            break;
            console.log('top')
        case 1:
        case 2:
        case 3:
            alert('too low');
            break;
        case 4:
        case 6:
            alert('You are Very close');
            break;
        case 5:
            alert('correct well played');
            break;

    }
    if (Qus6_b === 5) {
        score++;
        scoreA[arr_index++] = 'you gees was right the answer was 5';
        break;
    } else if (i === 3 && Qus6_b!== 5) {
        console.log(i);
        scoreA[arr_index++] = 'All of your answer was WRONG, the right answer was 5';
        alert('All of your answer was WRONG, the right answer was 5');
    }
}
}
Qus6(ges_ans)

console.log(score);
console.log(scoreA);
console.log(ges_ans = parseInt(prompt('guess a number.')));
let user_answer7;
let multiple = ['mikasa', 'eren', 'armin', 'levi', 'sasha', 'reiner', 'annie', 'jean'];

function Qus7(qus7_b) {
    

for (let i = 0; i < 6; i++) {
    qus7_b = prompt('who is the main character in attack on titan', 'You can Google it or Eren Good Luck').toLowerCase();
    // console.log(qus7_b);
    while (!qus7_b) {
        alert('Please Enter a valid Text')
        qus7_b = prompt('Who is the main character in attack on titan', 'You can Google it or Eren Good Luck').toLowerCase();
        // console.log(qus7_b);
    }
    switch (qus7_b) {
        case multiple[0]:
        case multiple[1]:
        case multiple[2]:
            alert('you are right, here are all possible answer ' + multiple[0] + ' ' + multiple[1] + ' ' + multiple[2],)
            break;

        default:
            alert('try again')
            break;
    }
    if (qus7_b == multiple[0] || qus7_b == multiple[1] || qus7_b == multiple[2]) {
        score++;
        scoreA[arr_index++] = 'your guess was right the answer was ' + qus7_b + ' here are all possible answer ' + multiple[0] + ' ' + multiple[1] + ' ' + multiple[2];
        // console.log(qus7_b);
        break;
    } else if (i == 5) {
        scoreA[arr_index++] = 'All of your answer was WRONG, the right answers was  ' + multiple[0] + ' ' + multiple[1] + ' ' + multiple[2];
        alert('All of your answer was WRONG, the right answers was  ' + multiple[0] + ' ' + multiple[1] + ' ' + multiple[2]);
    }
}
}
Qus7(user_answer7)
// console.log(score);
console.log(scoreA);
alert('Your final score was ' + score)

alert(scoreA)
let myelement =  document.getElementsByClassName('ans');
// let array = ["your answer was " + user_ans, "your answer was " + user_ans2, "your answer was " + user_ans3, "your answer was " + user_ans4, "your answer was " + user_ans5];
for (let i = 0; i <= scoreA.length; i++) {
myelement[i].innerHTML = scoreA[i] }
