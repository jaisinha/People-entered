let count = document.getElementById("count-el");
// console.log(count);
let c = 0;
butt = document.getElementById("increment-btn");
// butt.addEventListener(function (e) {
//   c += 1;
//   console.log(e);
//   count.innerHTML = c;
// });

function increment() {
  c += 1;
  count.innerHTML = c;
}
function save() {
  console.log(c);
}

// let c = 0;
// function incr(d) {
//   c += d;
// }

// incr(3);
// incr(3);
// incr(3);
// console.log(c);
