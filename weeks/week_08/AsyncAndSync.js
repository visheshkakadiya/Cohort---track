// Task1️⃣ - Convert Promise to Async/Await
// You have a function that returns a promise. Convert it to use async/await instead of .then().

async function fetchData() {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
    console.log(result)
}
// fetchData()



// Task 2️ - Sequential API Calls
// Create an async function that first fetches user details and then, using the user ID, fetches their order details. Use await to handle the asynchronous calls sequentially.

const User = {
    id: 1,
    name: "Alice",
}
const orders = ["Order1", "Order2"]

async function getUser() {
    return await new Promise((resolve) => {
        setTimeout(() => resolve(User), 1000);
    })
}

async function getOrder() {
    return await new Promise((resolve) => {
        setTimeout(() => resolve(orders), 1000)
    })
}

async function fetchUserAndOrder() {
    const user = await getUser()
    console.log(user)
    const order = await getOrder(user.id)
    console.log(order)
}
// fetchUserAndOrder()




// Task 2️: Create an async function that fetches two different pieces of data (user and posts).

// The getUser(userId) function should return user details after 1 second.
// The getPosts(userId) function should return an array of posts for that user after 1.5 seconds.
// Use await to ensure the user is fetched first before fetching posts.
// Finally, log the user details along with their posts.

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Emma" }
];

const posts = [
    { userId: 1, post: "Post 1" },
    { userId: 2, post: "Post 2" },
    { userId: 1, post: "Post 3" }
];

async function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = users.find(user => user.id === userId)
            resolve(user)
        }, 1000);
    })
}

async function getPost(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = posts.filter((post) => post.userId === postId)
            resolve(post)
        }, 1500)
    })
}

async function getUserAndPost(userId) {
    // const user = await getUser(userId)
    // console.log(user)

    // const post = await getPost(user.id)
    // console.log(post)

    const [user, post] = await Promise.all([getUser(userId), getPost(userId)])
    console.log(user)
    console.log(post)
}
// getUserAndPost(1)




// Task 4️: Chained Async Calls with Dependency
// Create an async function that:

// Fetches a product by its id.
// Uses the product's categoryId to fetch related products in the same category.
// Returns an object containing both the main product and the related products.

// Ensure that:
// The main product is fetched first.
// Related products fetch depends on the category of the main product.

const products = [
    { id: 1, name: "Laptop", categoryId: 101 },
    { id: 2, name: "Phone", categoryId: 102 },
    { id: 3, name: "Tablet", categoryId: 101 },
    { id: 4, name: "Headphones", categoryId: 103 },
    { id: 5, name: "Smartwatch", categoryId: 102 },
];

async function getProduct(productId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(p => p.id === productId);
            resolve(product);
        }, 1000);
    });
}

async function getRelatedProducts(categoryId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const related = products.filter(p => p.categoryId === categoryId);
            resolve(related);
        }, 1500);
    });
}

async function getProductAndRelated(productId) {
    const product = await getProduct(productId)
    console.log(product)

    const relProduct = await getRelatedProducts(product.id)
    if (relProduct.length > 0) {
        console.log(relProduct)
    } else {
        console.log("nothing")
    }
}
// getProductAndRelated(1)




// task:
// Fetch user data by ID.
// Fetch all posts by that user ID.
// Show "Loading..." before fetching starts.
// Handle errors properly with try/catch.
// Bonus: If fetching takes more than 3 seconds, cancel it.

const newUsers = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];
const newPosts = [
    { userId: 1, title: "Alice's first post", content: "Hello world!" },
    { userId: 1, title: "Alice's second post", content: "Async/Await is awesome!" },
    { userId: 2, title: "Bob's post", content: "JavaScript is fun!" }
];

async function getUsers(userId) {
    console.log("Lodaing...")

    const fetchUser = new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = newUsers.find(user => user.id === userId);
            if(user) resolve(user)
            else reject("User not found")
        }, 2000);
    })

        const timeout = new Promise((_, reject) => {
        setTimeout(() => reject("Process canceled: Took too long"), 3000);
    });


    try {
        const user = await Promise.race([fetchUser, timeout])
        console.log(user)

        const posts = await getPosts(userId)
        console.log(posts)
    } catch (err) {
        console.log(err)
    } 
}

async function getPosts(postId) {
    console.log("Loading Posts...")
    const fetchPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = newPosts.filter(post => post.userId === postId);
            if(post.length) resolve(post)
            else reject("User not found")
        }, 2000);
    })

        const timeout = new Promise((_, reject) => {
        setTimeout(() => reject("Process canceled: Took too long"), 3000);
    });

    return Promise.race([fetchPost, timeout])
}
getUsers(1)
