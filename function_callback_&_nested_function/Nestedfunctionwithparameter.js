function function1(val1) {
  function function2(val2) {
    return val1 + val2;
  }

  return function2;
}

function mainfunction() {
  let nestedfun = function1(10);
  let final = nestedfun(20);
  console.log(final);
}

mainfunction();
