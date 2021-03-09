// Prototype Class

function User(firstName,lastName,email,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dob = dob;
}

const user1 = new User("Daniel","No","dno@gmail.com",new Date(1988,11,1));

console.log(`${user1.firstName} ${user1.lastName} ${user1.dob}`);








// Class in Javascript version 6
class Player{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

let player = new Player("pepeclown","dno@gmail.com");
console.log(player);
console.log(`${player.name}`); 