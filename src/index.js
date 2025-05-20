const READLINE = require('readline'); // nodejs readline module

const RL = READLINE.createInterface({ // creates an interface for reading input from user and writing output to the console.
    input: process.stdin,
    output: process.stdout
});

let currentIdNum = 0; // variable that stores id for new user
let users = [{}]; // users object

function addUser(firstName, lastName, age) { // add user
    currentIdNum++; // sets id to a higher one than last created user
    users[currentIdNum] = { // creates new user with firstname lastname age and id
        firstName,
        lastName,
        age,
        id: currentIdNum
    }
}

main() // calls main function

function main() { // main function
    RL.question('> ', (userInput) => { // prompts user for input
        if (userInput == 'exit') { // if input = exit kills program
            RL.close();
            return 0;
        } else if (userInput == 'add-user') { // if input = add-user prompts user for details and creates a new user
            RL.question('First name: ', (firstName) => {
                RL.question('Last name: ', (lastName) => {
                    RL.question('Age: ', (age) => {
                        addUser(firstName, lastName, age); // calls add user
                        console.log("User " + firstName + " " + lastName + " added successfully");
                        return main();
                    })
                })
            })
        } else if (userInput == 'list-users') { // lists all users
            console.log(users);
            return main();
        } else if (userInput == 'find-user-id') { // finds user by id
            RL.question('Id: ', (id) => {
                console.log(users[id]);
                return main();
            })
        } else if (userInput == 'find-user-first-name') { // finds user by first name
            RL.question('first name: ', (name) => {
                let numOfUsers = currentIdNum;

                while (numOfUsers > 0) {
                    if (users[numOfUsers].firstName == name) {
                        console.log(users[numOfUsers]);
                    }
                    numOfUsers--;
                }

                return main();
            })
        } else if (userInput == 'find-user-last-name') { // finds user by last name
            RL.question('first name: ', (name) => {
                let numOfUsers = currentIdNum;

                while (numOfUsers > 0) {
                    if (users[numOfUsers].lastName == name) {
                        console.log(users[numOfUsers]);
                    }
                    numOfUsers--;
                }
                return main();
            })
        } else if (userInput == 'find-user-age') { // finds user by age
            RL.question('age: ', (age) => {
                let numOfUsers = currentIdNum;

                while (numOfUsers > 0) {
                    if (users[numOfUsers].age == age) {
                        console.log(users[numOfUsers]);
                    }
                    numOfUsers--;
                }

                return main();
            })
        } else { // if input is not valid
            console.log("Invalid command");
            return main();
        }
    })
}
