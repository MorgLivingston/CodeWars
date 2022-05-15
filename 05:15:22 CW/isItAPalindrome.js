function isPalindrome(x) {
    const lowerCase = x.toLowerCase();
    const forward = lowerCase
    const backward = lowerCase.split('').reverse().join('')
    return forward === backward
  }