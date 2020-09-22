function printTable(n) {
  function _printTable(n, index) {
    if (index === 11) {
      return;
    }
    console.log(`${n} x ${index} = ${n * index}`);
    _printTable(n, index + 1);
  }
  _printTable(n, 1);
}

printTable(9);
