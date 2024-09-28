class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary
    }

    describe() {
        console.log(`I'm a ${this.title}, I work in ${this.location}, and I earn ${this.salary}`);
    }
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('cook', 'Tokyo', 35000);

developer.describe();
cook.describe();
