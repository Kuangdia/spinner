const array = ['\r|', '\r/', '\r-', '\r\\', '\r|\n'];

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write(array[i]);
  }, 200 * i + 100);
};

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 900);