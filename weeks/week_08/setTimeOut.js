// setTimeout executes a function after a specified delay (in milliseconds).
console.log("Start");

//     setTimeout(() => {
//     console.log("Hello after 2 seconds!");
// }, 2000); 

// console.log("End");


//  setInterval repeatedly executes a function at fixed intervals.

let count = 1

// const interValId = setInterval(() => {
//     console.log(`count: ${count}`)
//     count++

//     if(count > 5) clearInterval(interValId) // Stops the interval after 5 times
// }, 1000);



// If we don't want a setTimeout to run, use clearTimeout(timeoutId).

// const timeout = setTimeout(() => {
//     console.log(`print after 3 second`)
// }, 3000)

// clearTimeout(timeout) // "This won't be printed!" never gets logged because we cleared it before execution.



// A simple Digital clock
function startClock() {
    setInterval(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString())
    }, 1000);
}
// startClock()

function fetchDataWithRetry(url, retries = 3, delay = 1000) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log("Data fetched:", data))
        .catch(err => {
            if (retries > 0) {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                setTimeout(() => fetchDataWithRetry(url, retries - 1, delay * 2), delay);
            } else {
                console.log("Failed after multiple retries:", err);
            }
        });
}

// Example: Try fetching data
// fetchDataWithRetry("https://jsonplaceholder.typicode.com/posts/1");



// Task: Write a function that prints "Processing..." every 2 seconds but stops after 6 seconds.

function process() {
    const proc = setInterval(() => {
        console.log("Processing...")
        count++
    
        if(count === 3) {
            clearTimeout(proc)
            console.log('process end')
        }
    }, 2000);
}
// process()



// Task: Create a function that logs "Task executed" after n seconds.

function executed(seconds) {
    setTimeout(() => {
        console.log(`Task executed`)
    }, seconds * 1000)
}
// executed(2)



// Task: Use setTimeout instead of setInterval to repeatedly log "Checking status..." every 2 seconds.
function Status() {
    function check() {
        console.log("Checking status...")
        setTimeout(check, 2000)
    }
    check()
}
// Status()



// Task: Create a function delayedUpperCase that takes a string and a delay time in milliseconds. It should log the uppercase version of the string after the given delay.

function delayedUpperCase(str, delay) {
    setTimeout(() => {
        const newStr = str.toUpperCase()
        console.log(newStr)
    }, delay)
}
delayedUpperCase('hello', 2000)