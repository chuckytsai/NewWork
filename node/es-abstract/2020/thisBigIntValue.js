'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');

var $TypeError = GetIntrinsic('%TypeError%');
var $bigIntValueOf = callBound('BigInt.prototype.valueOf', true);

var Type = require('./Type');

// https://ecma-international.org/ecma-262/11.0/#sec-thisbigintvalue

module.exports = function thisBigIntValue(value) {
	var type = Type(value);
	if (type === 'BigInt') {
		return value;
	}
	if (!$bigIntValueOf) {
		throw new $TypeError('BigInt is not supported');
	}
	return $bigIntValueOf(value);
};
