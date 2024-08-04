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
console.log(adultYears);

age = 45;
adultYears = calculateAdultYears(age)
console.log(adultYears);

let person = {
    name: 'Max',
    greet() {
        console.log('Hello');
    }
}

person.greet();
