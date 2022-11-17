const timerId = setTimeout(() => {
  console.log("hello");
}, 5000);

console.log(timerId);

clearTimeout(timerId);

console.log(timerId);
