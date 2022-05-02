"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMiniDecimal;
exports.toFixed = toFixed;
exports.BigIntDecimal = exports.NumberDecimal = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _numberUtil = require("./numberUtil");

var _supportUtil = require("./supportUtil");

/* eslint-disable max-classes-per-file */

/**
 * We can remove this when IE not support anymore
 */
var NumberDecimal = /*#__PURE__*/function () {
  function NumberDecimal(value) {
    (0, _classCallCheck2.default)(this, NumberDecimal);
    this.origin = '';

    if (!value && value !== 0 || !String(value).trim()) {
      this.empty = true;
      return;
    }

    this.origin = String(value);
    this.number = Number(value);
  }

  (0, _createClass2.default)(NumberDecimal, [{
    key: "negate",
    value: function negate() {
      return new NumberDecimal(-this.toNumber());
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new NumberDecimal(value);
      }

      var target = Number(value);

      if (Number.isNaN(target)) {
        return this;
      }

      var number = this.number + target; // [Legacy] Back to safe integer

      if (number > Number.MAX_SAFE_INTEGER) {
        return new NumberDecimal(Number.MAX_SAFE_INTEGER);
      }

      if (number < Number.MIN_SAFE_INTEGER) {
        return new NumberDecimal(Number.MIN_SAFE_INTEGER);
      }

      var maxPrecision = Math.max((0, _numberUtil.getNumberPrecision)(this.number), (0, _numberUtil.getNumberPrecision)(target));
      return new NumberDecimal(number.toFixed(maxPrecision));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return Number.isNaN(this.number);
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toNumber() === (target === null || target === void 0 ? void 0 : target.toNumber());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.number;
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!safe) {
        return this.origin;
      }

      if (this.isInvalidate()) {
        return '';
      }

      return (0, _numberUtil.num2str)(this.number);
    }
  }]);
  return NumberDecimal;
}();

exports.NumberDecimal = NumberDecimal;

var BigIntDecimal = /*#__PURE__*/function () {
  function BigIntDecimal(value) {
    (0, _classCallCheck2.default)(this, BigIntDecimal);
    this.origin = '';

    if (!value && value !== 0 || !String(value).trim()) {
      this.empty = true;
      return;
    }

    this.origin = String(value); // Act like Number convert

    if (value === '-') {
      this.nan = true;
      return;
    }

    var mergedValue = value; // We need convert back to Number since it require `toFixed` to handle this

    if ((0, _numberUtil.isE)(mergedValue)) {
      mergedValue = Number(mergedValue);
    }

    mergedValue = typeof mergedValue === 'string' ? mergedValue : (0, _numberUtil.num2str)(mergedValue);

    if ((0, _numberUtil.validateNumber)(mergedValue)) {
      var trimRet = (0, _numberUtil.trimNumber)(mergedValue);
      this.negative = trimRet.negative;
      var numbers = trimRet.trimStr.split('.');
      this.integer = BigInt(numbers[0]);
      var decimalStr = numbers[1] || '0';
      this.decimal = BigInt(decimalStr);
      this.decimalLen = decimalStr.length;
    } else {
      this.nan = true;
    }
  }

  (0, _createClass2.default)(BigIntDecimal, [{
    key: "getMark",
    value: function getMark() {
      return this.negative ? '-' : '';
    }
  }, {
    key: "getIntegerStr",
    value: function getIntegerStr() {
      return this.integer.toString();
    }
  }, {
    key: "getDecimalStr",
    value: function getDecimalStr() {
      return this.decimal.toString().padStart(this.decimalLen, '0');
    }
    /**
     * Align BigIntDecimal with same decimal length. e.g. 12.3 + 5 = 1230000
     * This is used for add function only.
     */

  }, {
    key: "alignDecimal",
    value: function alignDecimal(decimalLength) {
      var str = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(decimalLength, '0'));
      return BigInt(str);
    }
  }, {
    key: "negate",
    value: function negate() {
      var clone = new BigIntDecimal(this.toString());
      clone.negative = !clone.negative;
      return clone;
    }
  }, {
    key: "add",
    value: function add(value) {
      if (this.isInvalidate()) {
        return new BigIntDecimal(value);
      }

      var offset = new BigIntDecimal(value);

      if (offset.isInvalidate()) {
        return this;
      }

      var maxDecimalLength = Math.max(this.getDecimalStr().length, offset.getDecimalStr().length);
      var myAlignedDecimal = this.alignDecimal(maxDecimalLength);
      var offsetAlignedDecimal = offset.alignDecimal(maxDecimalLength);
      var valueStr = (myAlignedDecimal + offsetAlignedDecimal).toString(); // We need fill string length back to `maxDecimalLength` to avoid parser failed

      var _trimNumber = (0, _numberUtil.trimNumber)(valueStr),
          negativeStr = _trimNumber.negativeStr,
          trimStr = _trimNumber.trimStr;

      var hydrateValueStr = "".concat(negativeStr).concat(trimStr.padStart(maxDecimalLength + 1, '0'));
      return new BigIntDecimal("".concat(hydrateValueStr.slice(0, -maxDecimalLength), ".").concat(hydrateValueStr.slice(-maxDecimalLength)));
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }, {
    key: "isNaN",
    value: function isNaN() {
      return this.nan;
    }
  }, {
    key: "isInvalidate",
    value: function isInvalidate() {
      return this.isEmpty() || this.isNaN();
    }
  }, {
    key: "equals",
    value: function equals(target) {
      return this.toString() === (target === null || target === void 0 ? void 0 : target.toString());
    }
  }, {
    key: "lessEquals",
    value: function lessEquals(target) {
      return this.add(target.negate().toString()).toNumber() <= 0;
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      if (this.isNaN()) {
        return NaN;
      }

      return Number(this.toString());
    }
  }, {
    key: "toString",
    value: function toString() {
      var safe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!safe) {
        return this.origin;
      }

      if (this.isInvalidate()) {
        return '';
      }

      return (0, _numberUtil.trimNumber)("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr;
    }
  }]);
  return BigIntDecimal;
}();

exports.BigIntDecimal = BigIntDecimal;

function getMiniDecimal(value) {
  // We use BigInt here.
  // Will fallback to Number if not support.
  if ((0, _supportUtil.supportBigInt)()) {
    return new BigIntDecimal(value);
  }

  return new NumberDecimal(value);
}
/**
 * Align the logic of toFixed to around like 1.5 => 2
 */


function toFixed(numStr, separatorStr, precision) {
  if (numStr === '') {
    return '';
  }

  var _trimNumber2 = (0, _numberUtil.trimNumber)(numStr),
      negativeStr = _trimNumber2.negativeStr,
      integerStr = _trimNumber2.integerStr,
      decimalStr = _trimNumber2.decimalStr;

  var precisionDecimalStr = "".concat(separatorStr).concat(decimalStr);
  var numberWithoutDecimal = "".concat(negativeStr).concat(integerStr);

  if (precision >= 0) {
    // We will get last + 1 number to check if need advanced number
    var advancedNum = Number(decimalStr[precision]);

    if (advancedNum >= 5) {
      var advancedDecimal = getMiniDecimal(numStr).add("0.".concat('0'.repeat(precision)).concat(10 - advancedNum));
      return toFixed(advancedDecimal.toString(), separatorStr, precision);
    }

    if (precision === 0) {
      return numberWithoutDecimal;
    }

    return "".concat(numberWithoutDecimal).concat(separatorStr).concat(decimalStr.padEnd(precision, '0').slice(0, precision));
  }

  if (precisionDecimalStr === '.0') {
    return numberWithoutDecimal;
  }

  return "".concat(numberWithoutDecimal).concat(precisionDecimalStr);
}