function factorialize(num) {
    let fac = 1;
    for(var i = 2; i <= num; i++){
        fac *= i
    }
    return fac;
  }
  
  factorialize(5);