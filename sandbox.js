// object literals

let user = {
  name: 'patrick',
  age: 20,
  email: 'patrick@dev.co.uk',
  location: 'bao loc',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login: function () {
    console.log('the user logged in');
  },
  logout: function () {
    console.log('the user logged out');
  },
};

user.login();
user.logout();

const name = 'robert';
name.toUpperCase();
