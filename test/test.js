/* global describe, it */
'use strict';

var chai, assert, funop;
chai = require('chai');
funop = require('..');
assert = chai.assert;
chai.Assertion.includeStack = true;

describe('funop', function () {

  describe('and', function () {
    it('should behave like the && operator, except for the lazy evaluation', function () {
      assert.equal(false, funop.and(true, false));
      assert.equal(0, funop.and(0, false));
      assert.equal(false, [true, true, false].reduce(funop.and));
      assert.deepEqual([true, true, true], [true, true, false, true].filter(funop.and.bind(undefined, true)));
    });
  });

  describe('add', function () {
    it('should behave like the + operator', function () {
      assert.equal(10, funop.add(4, 6));
      assert.equal("46", funop.add("4", "6"));
      assert.equal(10, [2, 3, 5].reduce(funop.add));
    });
  });

  describe('create', function () {
    function Person (name) {
      this.name = name;
    }

    it('should behave like the new operator', function () {
      var johnNew = new Person("John N.");
      var johnCreate = funop.create(Person, ["John C."]);
      assert.equal("John N.", johnNew.name);
      assert.equal("John C.", johnCreate.name);
      assert.deepEqual(johnNew.prototype, johnCreate.prototype);
      assert.equal(johnNew.constructor, johnCreate.constructor);
      assert.equal(johnNew.constructor.prototype, johnCreate.constructor.prototype);
      
      var names = ["John", "Mike", "Moe"];

      function wrapInArray(a) {
        return [a];
      }

      function getPersonName(person) {
        return person.name;
      }

      assert.deepEqual(names, names.map(wrapInArray).map(funop.create.bind(undefined, Person)).map(getPersonName));
    });
  });
});