//OBJECT DESTRUCTURING
const person = {
    name: 'Angie',
    age: 29,
    location: {
        city: 'Stockholm',
        temp: 4
    }
}

//instead of
// const name = person.name;
// const age = person.age;

//this
const { name, age } = person;
// const { temp, city } = person.location;
console.log(`${name} is ${age} year(s) old`);

//if we want to rename the key from the object: const { temp: temperature, city } = person.location
//if we want a default value: const { name = 'Anonymous, age } = person;
//if be want both :D  : const { name: firstName = 'Anonymous, age } = person;


//ARRAY DESTRUCTURING
const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19147'];
// console.log(`You are in ${address[1]} ${address[2]}`);
const [ street, city, state, zip ] = address;
console.log(`You are in ${city} ${state}`);
//if we dont want to define all of the values from the array, we leave it empty but keep coma
// const [, , state] or even add default : const [, , , zip = '12544']

const item = ['Cafe Latte', '$2', '$2.50', '$2.75']
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);