function doubleChar(str) {
  return str.split('')
            .map(i => i.repeat(2))
            .join('');
}
