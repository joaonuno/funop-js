'use strict';

/*
 * Logical
 */

// And
exports.and = function (a, b) {
  return a && b;
};

// Or
exports.or = function (a, b) {
  return a || b;
};

// Not
exports.not = function (a) {
  return !a;
};


/*
 * Arithmetic
 */

// And
exports.add = function (a, b) {
  return a + b;
};

// Subtract
exports.subtract = function (a, b) {
  return a - b;
};

// Multiply
exports.multiply = function (a, b) {
  return a * b;
};

// Divide
exports.divide = function (a, b) {
  return a / b;
};

// Modulus
exports.modulus = function (a, b) {
  return a % b;
};

// Increment
exports.increment = function (a) {
  return a + 1;
};

// Decrement
exports.decrement = function (a) {
  return a - 1;
};


/*
 * Comparison
 */

// Strict equality
exports.equal = function (a, b) {
  return a === b;
};

// Strict inequality
exports.notEqual = function (a, b) {
  return a !== b;
};

// Non-strict equality
exports.nonStrictEqual = function (a, b) {
  return a == b;
};

// Non-strict inequality
exports.nonStrictNotEqual = function (a, b) {
  return a != b;
};

// Greater than
exports.greaterThan = function (a, b) {
  return a > b;
};

// Greater than or equal to
exports.greaterThanOrEqual = function (a, b) {
  return a >= b;
};

// Less than
exports.lessThan = function (a, b) {
  return a < b;
};

// Less than or equal to
exports.lessThanOrEqual = function (a, b) {
  return a <= b;
};


/*
 * Other
 */

// Bracket notation access
exports.at = function (obj, key) {
  return obj[key];
};

// Type of
exports.typeOf = function (obj) {
  return typeof obj;
};

// Delete
exports.delete = function (propertyName, obj) {
  delete obj[propertyName];
};

// Instance of
exports.instanceOf = function (Constructor, obj) {
  return obj instanceof Constructor;
};

// New
exports.create = function (Constructor, args) {
  return new (Function.prototype.bind.apply(Constructor, [Constructor].concat(args)));
}
