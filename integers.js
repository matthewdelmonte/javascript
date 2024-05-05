const regularDivision = (n) => {
    return n / 2; // expect a floating point number
  }
  
  const integerDivision = (n) => {
     return n / 2.0;
  }
  
  console.log(`This is regular division: ${regularDivision(4)}`);
  
  const typeFormatter = (f) => {
    let func = f(4.1);
    console.log(func);
    if (typeof(func) === 'number') {
      return "this is a number";
    } else {
      return "this is not a number";
    }
  }
  
  typeFormatter(regularDivision);
  
  console.log(integerDivision(4.1));