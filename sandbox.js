const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'Karl Patrick';

const paras = document.querySelectorAll('p');

// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>THIS IS A NEW H2</h2>';

const people = ['patrick', 'robert', 'kevin'];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
