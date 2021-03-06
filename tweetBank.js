const _ = require("lodash");

let data = [];

module.exports = {
  add: function (name, content) {
    data.push({
      name: name,
      content: content,
      id: Math.floor(Math.random() * 10),
    });
  },
  list: function () {
    return _.cloneDeep(data);
  },
  find: function (properties) {
    return _.cloneDeep(_.filter(data, properties));
  },
};

const randArrayEl = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
const getFakeName = function () {
  const fakeFirsts = [
    "Toni",
    "Guille",
    "Santi",
    "Facu",
    "Alan",
    "Pinki",
    "Tincho",
    "Solano",
    "R2D2",
  ];
  const fakeLasts = [
    "Scanlan",
    "Aszyn",
    "Tralice",
    "Velasco",
    "Sainz",
    "Palacio",
    "Palacios",
    "Lidueña",
    "Fisicaro",
    "Ecma",
  ];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};
const getFakeTweet = function () {
  const awesome_adj = [
    "increible",
    "emocionante",
    "increible",
    "gracioso",
    "dulce",
    "cool",
    "sorprendente",
    "impresionante",
  ];
  return (
    "Plataforma 5 es " +
    randArrayEl(awesome_adj) +
    "! Los profesores simplemente son " +
    randArrayEl(awesome_adj) +
    ". #P5Love #codedreams"
  );
};
for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
}
