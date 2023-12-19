import { testText } from './test.js';

function getComponent() {

  return import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      return element;
    })
    .catch((error) => 'An error occurred while loading the component');
 }

 const getPrintMe=() =>{
  return import("./print.js").then(({default:fn})=> fn);
 }

getComponent().then((component) => {
  getPrintMe().then(fn => {
    console.log(fn);
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = fn;
    component.appendChild(btn)
    console.log(testText)
  })

  document.body.appendChild(component);

});

