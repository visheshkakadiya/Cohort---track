// Q-1 :-
// 1. Set `pet.__proto__` to `null`.
// 2. Try accessing `pet.toString()`. What happens?
// 3. Print `pet.__proto__`. What do you see?

const pet = {
    type: "Dog"
};

pet.__proto__ = null;
// console.log(pet.toString);
// console.log(pet.__proto);

