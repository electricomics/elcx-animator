(function() {


function Animator (options) {
  var opts = options || {};

  return this;
}


if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = Animator;
}
else {
  this.Animator = Animator;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());