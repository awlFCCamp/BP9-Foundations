const decoder = (code) => {
  let dStr = "";
  for (let i = 0; i < code.length; i++) {
    if (isNaN(+code[i])) {
      dStr += code[i];
    } else {
      i += +code[i];
    }
  }
  return dStr;
};

console.log(decoder("0y4akjfe0s"));
console.log(decoder("0h2xce5ngbrdy"));
console.log(decoder("2bna0p1mp2osl0e"));
