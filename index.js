pesagem = [
  "560.14",
  "321.92",
  "343.21",
  "290.11"
];

var valorMaximaPesagem = pesagem.map(Number).reduce(function(a, b) {
  return Math.max(a, b);
});

var valorMinimoPesagem = pesagem.map(Number).reduce(function(a, b) {
  return Math.min(a, b);
});


console.log('Valor Maior da Pesagem: ' + valorMaximaPesagem + ' kg');
console.log('Valor Menor da Pesagem: ' + valorMinimoPesagem + ' kg');

  