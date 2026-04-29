// function printtable(n,num) {
//   if (n == 10) {
//     console.log(n * num);
//     return
//   }

//   console.log(n * num);
//   printtable(n + 1,num);
// }

// printtable(1,4);




//********* */ by using default parameter of function ***********

function table(number, i = 1) {
  if (i > 10) {
    return;
  }

  console.log(number * i);
  table(number, i + 1);
}

table(10);
