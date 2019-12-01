const person = {
    firstName: "Jean",
    lastName: "Leal",
    age: 26,
    city: "São Paulo",
    estate: "SP",
    country: "Brazil"
};

let {age} = person;
console.log(age);

let {firstName, lastName} = person;
console.log(firstName);
console.log(lastName);

let {firstName: name} = person;
console.log(name);

const names = ["Paulo", "Ana", "Chico"];
let {2: secondName} = names;
console.log(secondName);
let [name1, name2, name3] = names;
console.log(name1);

const mat = {
    sum: (x, y) => x + y,
    subTract: (x, y) => x - y
};

let {sum, subTract} = mat;
console.log(sum(10, 10));
console.log(subTract(10, 10));
