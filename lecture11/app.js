let age = 32;
let useName = 'Max'
let hobbies = ['Sport', 'Cooking', 'Reading']
let job = {
    title: 'Developer',
    place: 'New York',
    salary: 50000,
};

let adultYears;

function calculateAdultYears() {
    return age - 18;
}

adultYears = calculateAdultYears()
alert(adultYears);

age = 45;
adultYears = calculateAdultYears()
alert(adultYears);
