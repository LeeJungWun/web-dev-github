let lectureName = 'javaScript';
let lecturePrice = 1500;
let lectureGoals = ['HTML', 'CSS', 'JS'];

alert(lectureName);
alert(lecturePrice);
alert(lectureGoals);

let group = {
    lecture: lectureName,
    price: lecturePrice,
    goals: lectureGoals
}

alert(group.lecture);
alert(group.price);
alert(group.goals);

alert(group.goals[1]);

function getLectureGoal(goals, index) {
    return goals[index];
}

let goal = getLectureGoal(group.goals, 2);
alert(goal);