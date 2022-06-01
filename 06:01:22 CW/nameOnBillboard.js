function billboard(name, price = 30){
  let quote=0;
  for (let i=1; i<=name.length; i++) {quote+=price}
  return quote
  } 



  // solution I liked better 
  // const billboard = (name, price = 30) => +(name.length / (1 / price))