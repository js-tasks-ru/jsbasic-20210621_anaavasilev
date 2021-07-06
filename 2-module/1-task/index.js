function sumSalary(salaries) {
  let sum = 0;
  for(let key in salaries) {
    if(typeof salaries[key] === 'number') {
      sum = sum + salaries[key];
    }
  }
  alert(sum)
}
sumSalary(salaries);