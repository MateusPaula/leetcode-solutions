/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(a) {
      if (a === val) return true;
      else throw new Error("Not Equal");
    },
    notToBe(a) {
      if (a !== val) return true;
      else throw new Error("Equal");
    },
  };
};
