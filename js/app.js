'use strict'
let welcome_message = 'Wecome To My website, Can You give me your First & Last Name? Please';
let user_name = prompt(welcome_message);
let glad = 'I am glad to see here ' + user_name;
console.log(glad);
alert(glad)
document.getElementById('welcome').innerHTML = glad;
let questions_one = 'Do I Like programing?';
let questions_two = 'Do Like Video Games?';
let questions_three = 'Did I study as Engineering degree?';
let questions_fore = 'Do I like snapchat?';
let questions_five = 'Do I like mansaf (منسف)?';
let user_ans = prompt(questions_one);
console.log(user_ans.toLowerCase());

function tree(x) {
    let x1 = (x == 'yes');
    let y1 = (x == 'no');
    let z = x1 || y1;
    console.log(x);
    console.log(x1);
    console.log(!z);
    return !z;

}
function val(x, v) {
    while (tree(x)) {
        console.log(tree(x))
        alert('please anser by \'yes\' or \'no\'');
        x = prompt(v)
        console.log(x);
    }
}
val(user_ans.toLowerCase(), questions_one);
// console.log(tree(user_ans.toLowerCase(), user_ans.toLowerCase(),));
// console.log(user_ans.toLowerCase());

if (user_ans.toLowerCase() === 'yes') {
    alert('you are correct');
} else {
    alert('wtong anser I don\'t like it')
};

let user_ans2 = prompt(questions_two);
// console.log(user_ans2);
val(user_ans2.toLowerCase(), questions_two);
switch (user_ans2.toLowerCase()) {
    case "yes":
        alert('well done, you are right')
        break;

    case "no":
        alert('wrong answer I don\'t like it')
        break;

};
let user_ans3 = prompt(questions_three);
// console.log(user_ans3);
val(user_ans2.toLowerCase(), questions_three);
switch (user_ans3.toLowerCase()) {
    case "yes":
        alert('well done, you are right')
        break;

    case "no":
        alert('wrong answer I don\'t like it')
        break;

};
let user_ans4 = prompt(questions_fore);
// console.log(user_ans4);
val(user_ans4.toLowerCase(), questions_fore);

switch (user_ans4.toLowerCase()) {
    case "yes":
        alert('wrong answer I don\'t like it')
        break;

    case "no":
        alert('well done, you are right')
        break;

};
let user_ans5 = prompt(questions_five);
// console.log(user_ans5);
val(user_ans5.toLowerCase(), questions_five);
switch (user_ans5.toLowerCase()) {
    case "yes":
        alert('well done, you are right')
        break;

    case "no":
        alert('wrong answer I don\'t like it')
        break;

};
let myelement =  document.getElementsByClassName('ans');
let array = ["your answer was " + user_ans, "your answer was " + user_ans2, "your answer was " + user_ans3, "your answer was " + user_ans4, "your answer was " + user_ans5];
for (let i = 0; i <= array.length; i++) {
    myelement[i].innerHTML = array[i]

}

