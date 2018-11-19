function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length && i < instruments.length; i++) {

    arr.push (`${musicians[i]} plays ${instruments[i]}`);
}
return arr;
}
