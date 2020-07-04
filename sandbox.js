// get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['patrick', 'robert', 'kevin', 'karl'];

let html = ``;

people.forEach(function (person) {
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
