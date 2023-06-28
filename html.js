document.querySelector('body').style.cssText = `
    heigh: 100vh;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
`;

const calc = document.createElement('div');
calc.setAttribute('id', 'calc');
calc.setAttribute('value', '0');
calc.style.cssText = `
    min-width: 300px;
    height: 400px;
    background-color: rgb(204, 204, 204);
    border: solid rgb(138, 138, 138) 1px;
    border-radius: 3px;
    margin: 25vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2px;
    display: grid;
    text-align: right;
    align-self: right; 
`;
document.querySelector('body').append(calc);

const display = document.createElement('input');
display.setAttribute("type", "text");
display.setAttribute("id", "output");
display.setAttribute("name", "text");
display.setAttribute("disabled", "");
display.placeholder='0';
display.style.cssText += `
    height: 60px;
    background-color: rgb(65, 61, 61);
    color: white;
    grid-column: 1/5;
    font-size: 1.4rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const ac = document.createElement('button');
const del = document.createElement('button');
const divide = document.createElement('button');
ac.textContent = "AC";
del.textContent = "DEL";
divide.textContent = " / ";
ac.setAttribute('id', 'ac');
del.setAttribute('id', 'del');
divide.setAttribute('id', 'divide');

calc.append(display, ac, del, divide);

for (let i = 0; i < 10; i++) {
    let num = document.createElement('button');
    num.setAttribute("id", `num${i}`);
    num.textContent = `${i}`;
    calc.append(num);
}
const multiply = document.createElement('button');
const add = document.createElement('button');
const subtraction = document.createElement('button');
const point = document.createElement('button');
const equal = document.createElement('button');
multiply.textContent = " * ";
add.textContent = " + ";
subtraction.textContent = " - ";
point.textContent = ".";
equal.textContent = "=";
multiply.setAttribute('id', 'multiply');
add.setAttribute('id', 'add');
subtraction.setAttribute('id', 'subtraction');
point.setAttribute('id', 'point');
equal.setAttribute('id', 'equal');

calc.append(multiply, add, subtraction, point, equal);

document.querySelectorAll('#calc > button').forEach(button => {
    button.style.cssText = `
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgb(155, 155, 155);
   font-weight: 400;
   font-size: 1.4rem;
   border: none;
`;
});

ac.style.cssText += `
grid-row: 2;
grid-column: 1/3;
`; //perrašo css nustatymus kurie nustatyti per loopsą todėl rekia perkelt žemiau ir pridėti :)
multiply.style.cssText += `
grid-row: 3;
grid-column: 4/5;
`; 
add.style.cssText += `
grid-row: 4;
grid-column: 4/5;
`; 
subtraction.style.cssText += `
grid-row: 5;
grid-column: 4/5;
`; 
document.querySelector('#num0').style.cssText += `
grid-row: 6;
grid-column: 2/3;
`; 
equal.style.cssText += `
grid-row: 6;
grid-column: 3/5;
`; 