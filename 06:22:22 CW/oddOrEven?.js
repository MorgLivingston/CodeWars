function oddOrEven(array) {
  return array.reduce((sum, item)=> sum + item, 0) % 2 == 0 ? 'even': 'odd';
}
