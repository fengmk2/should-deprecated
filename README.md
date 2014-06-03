should-deprecated
=======

[![Build Status](https://secure.travis-ci.org/fengmk2/should-deprecated.png)](http://travis-ci.org/fengmk2/should-deprecated)

[![Dependency Status](https://gemnasium.com/fengmk2/should-deprecated.png)](https://gemnasium.com/fengmk2/should-deprecated)

[![NPM](https://nodei.co/npm/should-deprecated.png?downloads=true&stars=true)](https://nodei.co/npm/should-deprecated/)

![logo](https://raw.github.com/fengmk2/should-deprecated/master/logo.png)

should.js deprecated assertions

## Install

```bash
$ npm install should-deprecated
```

```
require('should-deprecated');
```

That row patch your should instance adding assertions. With mocha you can use it via `-r` switch.

## include(obj)

Assert that the given `obj` is present via `indexOf()`,
so this works for strings, arrays, or custom objects implementing indexOf.
Also it can assert if given object will have some sub-object.

Assert array value:

```javascript
[1,2,3].should.include(3)
[1,2,3].should.include(2)
[1,2,3].should.not.include(4)
```
Assert substring:

```javascript
'foo bar baz'.should.include('foo')
'foo bar baz'.should.include('bar')
'foo bar baz'.should.include('baz')
'foo bar baz'.should.not.include('FOO')
```
Assert object includes another object:

```javascript
var tobi = { name: 'Tobi', age: 1 };
var jane = { name: 'Jane', age: 5 };
var user = { name: 'TJ', pet: tobi };

user.should.include({ pet: tobi });
user.should.include({ pet: tobi, name: 'TJ' });
user.should.not.include({ pet: jane });
user.should.not.include({ name: 'Someone' });
```
## includeEql(obj)

Assert that an object equal to the given `obj` is present in an Array:

```javascript
[[1],[2],[3]].should.includeEql([3])
[[1],[2],[3]].should.includeEql([2])
[[1],[2],[3]].should.not.includeEql([4])
```

## License

(The MIT License)

Copyright (c) 2014 fengmk2 &lt;fengmk2@gmail.com&gt; and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
