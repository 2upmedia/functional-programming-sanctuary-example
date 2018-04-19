const { create, env } = require("sanctuary");
const $ = require("sanctuary-def");

const opts = { checkTypes: true, env };
const def = $.create(opts);
const S = create(opts);

const keep = function(fields, obj) {
  return Object.keys(obj)
    .filter(key => fields.includes(key))
    .reduce((res, key) => {
      res[key] = obj[key];
      return res;
    }, {});
};

S.pick = def("pick")({})([$.Array($.String), $.Object, $.Object])(
  fields => obj => keep(fields, obj)
);

module.exports = S;
