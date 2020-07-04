// arguments & parameters

const speak = function (name = 'patrick', time = 'night') {
  console.log(`good ${time} ${name}`);
};

speak('robert', 'morning');
speak();
