// let i = 1;

// while (i < 10) {
//   console.log(i++);
// }
// for (i = 0; i <= 10; i += 1) {
//   console.log(i);
// }

// let a = `a`;
// let r = "";
// for (i = 0; i < 140; i++) {
//   r += a;
// }

// console.log(r);
// console.log(r.length);

// const A = "A";
// let F;

// function doStuff(B) {
//   console.log(B);
//   const C = "C";
//   let H = "H";
//   if (1 + 1 === 2) {
//     const D = "D";
//     H = "something else";
//   }
//   console.log(D);
//   console.log(H);
//   F = "F";
// }

// let E = 0;
// while (E < 3) {
//   E++;
//   console.log(A);
//   const G = "G";
// }
// console.log(E);
// console.log(G);

// doStuff("B");
// console.log(B);
// console.log(C);
// console.log(F);

// const dog = {
//   name: "Lucy",
//   speak() {
//     console.log(`Woof Woof! My name is ${dog.name}.`);
//   },
// };

// dog.speak();

// let cities = ["Baku", "Istanbul", "Milan", "Torino"];

// cities.forEach(function (city) {
//   console.log(city.toUpperCase());
// });

// for (let city of cities) {
//   console.log(city.toLowerCase());
// }

// for (i = 0; i < cities.length; i++) {
//   console.log(cities[i].toUpperCase());
// }

const myButton = document.querySelector(".myButton");

myButton.addEventListener("click", function () {
  alert("Hey There!");
});

const myParagraph = document.querySelector(".myParagraph");
const myInput = document.querySelector(".myInput");

myInput.addEventListener("keyup", function () {
  myParagraph.innerHTML = myInput.value;
});

const myBox = document.querySelector(".myBox");
const colorChanger = document.querySelector(".colorChanger");

colorChanger.addEventListener("change", function () {
  myBox.style.backgroundColor = colorChanger.value;
});
