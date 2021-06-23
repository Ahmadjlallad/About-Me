let arr_index = 0;
let scoreA = [];
let score = 0;
'use strict'
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
// console.log(checker_f(user_ans.toLowerCase(), user_ans.toLowerCase(),));
// console.log(user_ans.toLowerCase());

if (user_ans.toLowerCase() === 'yes' || user_ans.toLowerCase() === 'y') {
    alert('you are correct');
    score++
    scoreA[arr_index++] = 'your answer was correct'
} else if (user_ans.toLowerCase() === 'no' || user_ans.toLowerCase() === 'n') {
    alert('wrong answer I don\'t like it')
    scoreA[arr_index++] = 'your answer was Wrong'
};

let user_ans2 = prompt(questions_two, 'Please Answer By Yes or Y same for No');
// console.log(user_ans2);
user_ans2 = validation(user_ans2.toLowerCase(), questions_two);
switch (user_ans2.toLowerCase()) {
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
let user_ans3 = prompt(questions_three, 'Please Answer By Yes or Y same for No');
// console.log(user_ans3);
user_ans3 = validation(user_ans2.toLowerCase(), questions_three);
switch (user_ans3.toLowerCase()) {
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
let user_ans4 = prompt(questions_fore, 'Please Answer By Yes or Y same for No');
// console.log(user_ans4);
user_ans4 = validation(user_ans4.toLowerCase(), questions_fore);

switch (user_ans4.toLowerCase()) {
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
let user_ans5 = prompt(questions_five, 'Please Answer By Yes or Y same for No');
// console.log(user_ans5);
user_ans5 = validation(user_ans5.toLowerCase(), questions_five);
switch (user_ans5.toLowerCase()) {
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

let ges_ans
console.log(typeof (ges_ans));

for (let i = 0; i < 4; i++) {
    ges_ans = parseInt(prompt('Guess a Number between 1 - 9.'));
    while (ges_ans >= 10 || !ges_ans) {
        console.log(ges_ans);
        alert('please enter a number between 1 - 9')
        ges_ans = parseInt(prompt('guess a number.'));
    }
    switch (ges_ans) {
        case 8:
        case 9:
        case 7:
            alert('Too High');
            break;
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
    if (ges_ans === 5) {
        score++;
        scoreA[arr_index++] = 'you gees was right the answer was 5';
        break;
    } else if (i === 3 && ges_ans !== 5) {
        console.log(i);
        scoreA[arr_index++] = 'All of your answer was WRONG, the right answer was 5';
        alert('All of your answer was WRONG, the right answer was 5');
    }
}

// console.log(score);
// console.log(scoreA);
// console.log(ges_ans = parseInt(prompt('guess a number.')););
let user_answer7;
let multiple = ['mikasa', 'eren', 'armin', 'levi', 'sasha', 'reiner', 'annie', 'jean'];
for (let i = 0; i < 6; i++) {
    user_answer7 = prompt('who is the main character in attack on titan', 'You can Google it or Eren Good Luck').toLowerCase();
    // console.log(user_answer7);
    while (!user_answer7) {
        alert('Please Enter a valid Text')
        user_answer7 = prompt('Who is the main character in attack on titan', 'You can Google it or Eren Good Luck').toLowerCase();
        // console.log(user_answer7);
    }
    switch (user_answer7) {
        case multiple[0]:
        case multiple[1]:
        case multiple[2]:
            alert('you are right, here are all possible answer ' + multiple[0] + ' ' + multiple[1] + ' ' + multiple[2],)
            break;

        default:
            alert('try again')
            break;
    }
    if (user_answer7 == multiple[0] || user_answer7 == multiple[1] || user_answer7 == multiple[2]) {
        score++;
        scoreA[arr_index++] = 'your guess was right the answer was ' + user_answer7 + ' here are all possible answer ' + multiple[0] + ' ' + multiple[1] + ' ' + multiple[2];
        // console.log(user_answer7);
        break;
    } else if (i == 5) {
        scoreA[arr_index++] = 'All of your answer was WRONG, the right answers was  ' + multiple[0] + ' ' + multiple[1] + ' ' + multiple[2];
        alert('All of your answer was WRONG, the right answers was  ' + multiple[0] + ' ' + multiple[1] + ' ' + multiple[2]);
    }
}
// console.log(score);
console.log(scoreA);
alert('Your final score was ' + score)

alert(scoreA)
let myelement =  document.getElementsByClassName('ans');
// let array = ["your answer was " + user_ans, "your answer was " + user_ans2, "your answer was " + user_ans3, "your answer was " + user_ans4, "your answer was " + user_ans5];
for (let i = 0; i <= scoreA.length; i++) {
myelement[i].innerHTML = scoreA[i] }