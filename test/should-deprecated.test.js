/**!
 * should-deprecated - test/should-deprecated.test.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

// from https://github.com/shouldjs/should.js/blob/8eee74121351cc9c03949be04ca97b6fdd7d22e0/test/ext/deprecated.test.js

var should = require('should');
require('../');

function err(fn, msg) {
  var ok = true;
  try {
    fn();
    ok = false;
  } catch (err) {
    if(err.message !== msg) {
      throw new should.AssertionError({
        message: 'Expected message does not match',
        expected: msg,
        actual: err.message });
    }
  }
  if(!ok) throw new Error('expected an error');
}

describe('deprecated', function() {
  it('test include() with string', function() {
    'foobar'.should.include('bar');
    'foobar'.should.include('foo');
    'foobar'.should.not.include('baz');

    err(function(){
      'foobar'.should.include('baz');
    }, "expected 'foobar' to include 'baz'");

    err(function(){
      'foobar'.should.not.include('bar');
    }, "expected 'foobar' not to include 'bar'");

    err(function(){
      'foobar'.should.include('baz', 'foo');
    }, "foo");
  });

  it('test include() with array', function() {
    ['foo', 'bar'].should.include('foo');
    ['foo', 'bar'].should.include('foo');
    ['foo', 'bar'].should.include('bar');
    [1,2].should.include(1);
    ['foo', 'bar'].should.not.include('baz');
    ['foo', 'bar'].should.not.include(1);

    err(function(){
      ['foo'].should.include('bar');
    }, "expected [ 'foo' ] to include 'bar'");

    err(function(){
      ['bar', 'foo'].should.not.include('foo');
    }, "expected [ 'bar', 'foo' ] not to include 'foo'");

    err(function(){
      ['bar', 'foo'].should.not.include('foo', 'foo');
    }, "foo");
  });

  it('test include() with object', function() {
    var tobi = { name: 'Tobi', age: 2 };
    var jane = { name: 'Jane', age: 2 };

    var user = { name: 'TJ', pet: tobi, age: 24 };

    user.should.include({ pet: tobi });
    user.should.include({ pet: tobi, name: 'TJ' });
    user.should.not.include({ pet: tobi, name: 'Someone else' });
    user.should.not.include({ pet: jane });
    user.should.not.include({ pet: jane, name: 'TJ' });

    err(function(){
      user.should.include({ pet: { name: 'Luna' } });
    }, "expected { name: 'TJ', pet: { name: 'Tobi', age: 2 }, age: 24 } to include an object equal to { pet: { name: 'Luna' } }");
  });

  it('test includeEql() with array', function() {
    [['foo'], ['bar']].should.includeEql(['foo']);
    [['foo'], ['bar']].should.includeEql(['bar']);
    [['foo'], ['bar']].should.not.includeEql(['baz']);
    [].should.not.includeEql(['baz']);

    err(function(){
      [['foo']].should.includeEql(['bar']);
    }, "expected [ [ 'foo' ] ] to include an object equal to [ 'bar' ]");

    err(function(){
      [['foo']].should.not.includeEql(['foo']);
    }, "expected [ [ 'foo' ] ] not to include an object equal to [ 'foo' ]");

    err(function(){
      [['foo']].should.not.includeEql(['foo'], 'foo');
    }, "foo");
  });
});
