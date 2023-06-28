for (let i = 0; i < 10; i++) {
  document
    .querySelector(`#num${[i]}`)
    .addEventListener("click", function click(e) {
      e.preventDefault();
      const value = document.querySelector(`#num${[i]}`).textContent;
      document.querySelector("#output").value += value;
    });
}
document.querySelector(`#add`).addEventListener("click", function click(e) {
  e.preventDefault();
  const value = document.querySelector(`#add`).textContent;
  document.querySelector("#output").value += value;
});

document.querySelector(`#divide`).addEventListener("click", function click(e) {
  e.preventDefault();
  const value = document.querySelector(`#divide`).textContent;
  document.querySelector("#output").value += value;
});

document
  .querySelector(`#multiply`)
  .addEventListener("click", function click(e) {
    e.preventDefault();
    const value = document.querySelector(`#multiply`).textContent;
    document.querySelector("#output").value += value;
  });

document
  .querySelector(`#subtraction`)
  .addEventListener("click", function click(e) {
    e.preventDefault();
    const value = document.querySelector(`#subtraction`).textContent;
    document.querySelector("#output").value += value;
  });

document.querySelector(`#point`).addEventListener("click", function click(e) {
  e.preventDefault();
  const value = document.querySelector(`#point`).textContent;
  document.querySelector("#output").value += value;
});

document.querySelector(`#ac`).addEventListener("click", function click(e) {
  e.preventDefault();
  document.querySelector("#output").value = "";
  display.placeholder = "0";
});

document.querySelector(`#del`).addEventListener("click", function click(e) {
  e.preventDefault();
  let value = document.querySelector(`#output`).value;
  value = value.slice(0, -1);
  document.querySelector("#output").value = value;
});

document.querySelector(`#equal`).addEventListener("click", function click(e) {
  e.preventDefault();
  const value = document.querySelector(`#output`).value.split(" ");
  let ans;
  if (value[2]) {
    function eq(numOne, op, numTwo) {
      if (op == "+") {
        ans = Number(numOne) + Number(numTwo);
        return ans;
      } else if (op == "-") {
        ans = Number(numOne) - Number(numTwo);
        return ans;
      } else if (op == "/") {
        ans = Number(numOne) / Number(numTwo);
        return ans;
      } else if (op == "*") {
        ans = Number(numOne) * Number(numTwo);
        return ans;
      }
    }
  }
  eq(value[0], value[1], value[2]);
  document.querySelector("#output").value = ans;
});
