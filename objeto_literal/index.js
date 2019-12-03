class Test {
    getPerson(firstName, lastName, age){
        return {firstName, lastName, age};//Equals to -> {firstName: firstName, lastName: lastName, age: age}
    }
}
console.log(new Test().getPerson("Jean", "Leal", 26));
