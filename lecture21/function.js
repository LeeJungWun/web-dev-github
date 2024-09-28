function greetUser(greetingPrefix, userName = 'user') {
    //console.log(greetingPrefix + ' ' + userName);
    console.log(`${greetingPrefix} ${userName}`)
}

greetUser('hi', 'lee');
greetUser('hello');

function sumUp(...numbers) {
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    return result;
}

console.log(sumUp(1,2,3,4,5,6,10,23));
