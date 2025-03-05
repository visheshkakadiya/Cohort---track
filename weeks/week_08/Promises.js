function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

// Testing the function
// fetchData().then(data => console.log(data)); // Logs "Data received" after 2 sec



// Task: Create a function that simulates fetching user data, then fetching their orders.

// The first promise should resolve with a user object { id: 1, name: "John" } after 2 seconds.
// The second promise should resolve with an array of orders [ "Order1", "Order2" ] after 1 second.
// Chain these promises so that after getting the user, you fetch their orders.

const obj1 = {
    id: 1,
    name: "John",
}
const orders = ["Order1", "Order2"]
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(obj1)
        }, 2000)
    })
}

function getOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(orders)
        }, 1000)
    })
}
// getUser()
//     .then(data => {
//         console.log(data)
//         return getOrder(obj1.id);
//     })
//     .then(order => console.log(order))


// Task 1️: Handle Errors in getUser()
//getUser()
    //.then(data => console.log(data))
    //.catch(err => console.log("Error: " + err))

// Task 2: Promise.all() Practice
// Modify getUser() and getOrder() so they run at the same time instead of waiting for one another.

//Promise.all([getUser(), getOrder()])
    //.then(data => console.log(data))



function api1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("API 1 Response"), 1000); //  Math.random() * 3000 ===> for task 3 Promise.race()
    });
}

function api2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("API 2 Response"), 2000); //  Math.random() * 3000 ===> for task 3 Promise.race()
    });
}

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ id: 1, name: "Alice" }), 2000);
    });
}

function getOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(["Item1", "Item2"]), 1000);
    });
}


// Task 3️: Fastest API Wins (Promise.race)
// Create two promises (api1 and api2) that resolve at different times.
// Use Promise.race() so that whichever resolves first gets logged.
Promise.race([api1(), api2()])
    .then(data => console.log(data))
    

// Task 4️: Chained API Calls with Error Handling
// First, fetch getUser().
// If successful, fetch getOrder().
// If either fails, log "Something went wrong" using .catch().
getUser()
    .then(data => {
        console.log(data)
        return getOrder()
    })
    .then(data => console.log(data))

    