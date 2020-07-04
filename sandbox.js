// object literals

let user = {
  name: 'patrick',
  age: 20,
  email: 'patrick@dev.co.uk',
  location: 'bao loc',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
};

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

const key = 'location';

console.log(user[key]);
user['name'] = 'robert';
console.log(user['name']);

console.log(typeof user);
