const inputFirst = document.querySelector(".inputFirst");
const theResult = document.querySelector(".theResult");
const theResult1 = document.querySelector(".theResult1");
const btn = document.querySelector(".btn");

function btnOnClick() {
  const result1 = inputFirst.value / 30.48;

  const result = Math.trunc(inputFirst.value / 30.48);
  const userWant = inputFirst.value;
  theResult1.value = ` ${result1.toString().slice(0, 4)} Ft`;
  theResult.value = `${userWant} Cm is about ${result} Ft`;
}
btn.addEventListener("click", btnOnClick);
