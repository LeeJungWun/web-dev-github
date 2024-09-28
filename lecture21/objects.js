class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary
    }
}

const developer = new Job('Develop', 'New York', 50000);
console.log(developer)