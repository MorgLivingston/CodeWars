const alternate = (n, firstValue, secondValue) => Array.from({lenght: n},(_,index) => !(index % 2) ? firstValue : secondValue)
