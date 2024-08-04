let age = 32;
let useName = 'Max'
let hobbies = ['Sport', 'Cooking', 'Reading']
let job = {
    title: 'Developer',
    place: 'New York',
    salary: 50000,
};

let adultYears;

function calculateAdultYears(userAge) {
    return userAge - 18;
}

adultYears = calculateAdultYears(age)
alert(adultYears);

age = 45;
adultYears = calculateAdultYears(age)
alert(adultYears);

let person = {
    name: 'Max',
    greet() {
        alert('Hello');
    }
}

person.greet();
