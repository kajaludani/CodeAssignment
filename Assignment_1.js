var employees = [
    { id: 10, name: 'John', experience: 5},
    { id: 15, name: 'Mathew', experience: 7},
    { id: 20, name: 'keith', experience: 12},
    { id: 25, name: 'louis', experience: 5},
    { id: 30, name: 'mark', experience: 4},
    { id: 35, name: 'Ash', experience: 3},
    { id: 40, name: 'robert', experience: 6},
]

var empid = employees.map(function(emp) {
return emp.id;
});
console.log(empid);

var five = employees.filter(function(emp) {
    return emp.experience > 5;
});

console.log(five);

function getSum(total, num) {
    return total + num.experience;
}
console.log(employees.reduce(getSum,0));
//------------------------------------------Program1---------------------------------------------------
let cat = {
    catName: 'Kitty',
    sayName () {
    return this.catName;
    }
}

let sayName = cat.sayName();
console.log(sayName);

//------------------------------------------Program2---------------------------------------------------

class user {
    displayName(name,location) {
        this.name = name,
        this.location = location
        return this.name + " is in " + this.location;
    }
}

var user1 = new user();
console.log(user1.displayName('Marlabs','New Jersey'));

//------------------------------------------Program3---------------------------------------------------

function myName(fName, lName) {

    console.log(`my name is ${fName} ${lName}`);

    function fullDetails(companyName) {
        const value = `my name is ${fName} ${lName} and I work for ${companyName}`
        return value;
    }

    return fullDetails;
}

var element = (myName('Altaf','Pattan'))('Marlabs');
console.log(element);

//------------------------------------------Program4---------------------------------------------------

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
    
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon);
logPokemon('sushi','algorithm');

//------------------------------------------Program5---------------------------------------------------

var x = '5'; 
var promise1 = new Promise(function(resolve, reject) {
    if (x = 5) {
        let data = {
            name: 'Marlabs',
            address: {
                state: 'NJ',
                zip: 084444
            }
        }
        console.log(data.name);
        resolve(data.address);
    } else {
        var res = new Error('failed......');
        reject(res);
    }
});

var promise2 = function(address) {
    var msg = "address:" + address.state + ' ' + address.zip;
    return Promise.resolve(msg);
}

    promise1.then(promise2).then((msg) => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err.message);
    });

//------------------------------------------Program6---------------------------------------------------
