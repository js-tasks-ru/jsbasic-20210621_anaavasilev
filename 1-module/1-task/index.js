function factorial(n) {
  let x = 1;
  while(n) {
    x = x * n--;
  }
  alert(x);
  return x;
}
factorial(n);