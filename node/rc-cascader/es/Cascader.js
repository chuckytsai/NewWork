import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import * as React from 'react';
import Trigger from 'rc-trigger';
import warning from 'warning';
import KeyCode from "rc-util/es/KeyCode";
import arrayTreeFilter from 'array-tree-filter';
import { isEqualArrays } from './utils';
import Menus from './Menus';
import BUILT_IN_PLACEMENTS from './placements';

var Cascader = /*#__PURE__*/function (_React$Component) {
  _inherits(Cascader, _React$Component);

  var _super = _createSuper(Cascader);

  function Cascader(props) {
    var _this;

    _classCallCheck(this, Cascader);

    _this = _super.call(this, props);

    _this.setPopupVisible = function (popupVisible) {
      var value = _this.state.value;

      if (!('popupVisible' in _this.props)) {
        _this.setState({
          popupVisible: popupVisible
        });
      } // sync activeValue with value when panel open


      if (popupVisible && !_this.state.popupVisible) {
        _this.setState({
          activeValue: value
        });
      }

      _this.props.onPopupVisibleChange(popupVisible);
    };

    _this.handleChange = function (options, _ref, e) {
      var visible = _ref.visible;

      if (e.type !== 'keydown' || e.keyCode === KeyCode.ENTER) {
        _this.props.onChange(options.map(function (o) {
          return o[_this.getFieldName('value')];
        }), options);

        _this.setPopupVisible(visible);
      }
    };

    _this.handlePopupVisibleChange = function (popupVisible) {
      _this.setPopupVisible(popupVisible);
    };

    _this.handleMenuSelect = function (targetOption, menuIndex, e) {
      // Keep focused state for keyboard support
      var triggerNode = _this.trigger.getRootDomNode();

      if (triggerNode && triggerNode.focus) {
        triggerNode.focus();
      }

      var _this$props = _this.props,
          changeOnSelect = _this$props.changeOnSelect,
          loadData = _this$props.loadData,
          expandTrigger = _this$props.expandTrigger;

      if (!targetOption || targetOption.disabled) {
        return;
      }

      var activeValue = _this.state.activeValue;
      activeValue = activeValue.slice(0, menuIndex + 1);
      activeValue[menuIndex] = targetOption[_this.getFieldName('value')];

      var activeOptions = _this.getActiveOptions(activeValue);

      if (targetOption.isLeaf === false && !targetOption[_this.getFieldName('children')] && loadData) {
        if (changeOnSelect) {
          _this.handleChange(activeOptions, {
            visible: true
          }, e);
        }

        _this.setState({
          activeValue: activeValue
        });

        loadData(activeOptions);
        return;
      }

      var newState = {};

      if (!targetOption[_this.getFieldName('children')] || !targetOption[_this.getFieldName('children')].length) {
        _this.handleChange(activeOptions, {
          visible: false
        }, e); // set value to activeValue when select leaf option


        newState.value = activeValue; // add e.type judgement to prevent `onChange` being triggered by mouseEnter
      } else if (changeOnSelect && (e.type === 'click' || e.type === 'keydown')) {
        if (expandTrigger === 'hover') {
          _this.handleChange(activeOptions, {
            visible: false
          }, e);
        } else {
          _this.handleChange(activeOptions, {
            visible: true
          }, e);
        } // set value to activeValue on every select


        newState.value = activeValue;
      }

      newState.activeValue = activeValue; //  not change the value by keyboard

      if ('value' in _this.props || e.type === 'keydown' && e.keyCode !== KeyCode.ENTER) {
        delete newState.value;
      }

      _this.setState(newState);
    };

    _this.handleItemDoubleClick = function () {
      var changeOnSelect = _this.props.changeOnSelect;

      if (changeOnSelect) {
        _this.setPopupVisible(false);
      }
    };

    _this.handleKeyDown = function (e) {
      var children = _this.props.children; // https://github.com/ant-design/ant-design/issues/6717
      // Don't bind keyboard support when children specify the onKeyDown

      if (children && children.props.onKeyDown) {
        children.props.onKeyDown(e);
        return;
      }

      var activeValue = _toConsumableArray(_this.state.activeValue);

      var currentLevel = activeValue.length - 1 < 0 ? 0 : activeValue.length - 1;

      var currentOptions = _this.getCurrentLevelOptions();

      var currentIndex = currentOptions.map(function (o) {
        return o[_this.getFieldName('value')];
      }).indexOf(activeValue[currentLevel]);

      if (e.keyCode !== KeyCode.DOWN && e.keyCode !== KeyCode.UP && e.keyCode !== KeyCode.LEFT && e.keyCode !== KeyCode.RIGHT && e.keyCode !== KeyCode.ENTER && e.keyCode !== KeyCode.SPACE && e.keyCode !== KeyCode.BACKSPACE && e.keyCode !== KeyCode.ESC && e.keyCode !== KeyCode.TAB) {
        return;
      } // Press any keys above to reopen menu


      if (!_this.state.popupVisible && e.keyCode !== KeyCode.BACKSPACE && e.keyCode !== KeyCode.LEFT && e.keyCode !== KeyCode.RIGHT && e.keyCode !== KeyCode.ESC && e.keyCode !== KeyCode.TAB) {
        _this.setPopupVisible(true);

        if (_this.props.onKeyDown) {
          _this.props.onKeyDown(e);
        }

        return;
      }

      if (e.keyCode === KeyCode.DOWN || e.keyCode === KeyCode.UP) {
        e.preventDefault();
        var nextIndex = currentIndex;

        if (nextIndex !== -1) {
          if (e.keyCode === KeyCode.DOWN) {
            nextIndex += 1;
            nextIndex = nextIndex >= currentOptions.length ? 0 : nextIndex;
          } else {
            nextIndex -= 1;
            nextIndex = nextIndex < 0 ? currentOptions.length - 1 : nextIndex;
          }
        } else {
          nextIndex = 0;
        }

        activeValue[currentLevel] = currentOptions[nextIndex][_this.getFieldName('value')];
      } else if (e.keyCode === KeyCode.LEFT || e.keyCode === KeyCode.BACKSPACE) {
        e.preventDefault();
        activeValue.splice(activeValue.length - 1, 1);
      } else if (e.keyCode === KeyCode.RIGHT) {
        e.preventDefault();

        if (currentOptions[currentIndex] && currentOptions[currentIndex][_this.getFieldName('children')]) {
          activeValue.push(currentOptions[currentIndex][_this.getFieldName('children')][0][_this.getFieldName('value')]);
        }
      } else if (e.keyCode === KeyCode.ESC || e.keyCode === KeyCode.TAB) {
        _this.setPopupVisible(false);

        if (_this.props.onKeyDown) {
          _this.props.onKeyDown(e);
        }

        return;
      }

      if (!activeValue || activeValue.length === 0) {
        _this.setPopupVisible(false);
      }

      var activeOptions = _this.getActiveOptions(activeValue);

      var targetOption = activeOptions[activeOptions.length - 1];

      _this.handleMenuSelect(targetOption, activeOptions.length - 1, e);

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    };

    _this.saveTrigger = function (node) {
      _this.trigger = node;
    };

    var initialValue = [];

    if ('value' in props) {
      initialValue = props.value || [];
    } else if ('defaultValue' in props) {
      initialValue = props.defaultValue || [];
    }

    warning(!('filedNames' in props), '`filedNames` of Cascader is a typo usage and deprecated, please use `fieldNames` instead.');
    _this.state = {
      popupVisible: props.popupVisible,
      activeValue: initialValue,
      value: initialValue,
      prevProps: props
    };
    _this.defaultFieldNames = {
      label: 'label',
      value: 'value',
      children: 'children'
    };
    return _this;
  }

  _createClass(Cascader, [{
    key: "getPopupDOMNode",
    value: function getPopupDOMNode() {
      return this.trigger.getPopupDomNode();
    }
  }, {
    key: "getFieldName",
    value: function getFieldName(name) {
      var defaultFieldNames = this.defaultFieldNames;
      var _this$props2 = this.props,
          fieldNames = _this$props2.fieldNames,
          filedNames = _this$props2.filedNames;

      if ('filedNames' in this.props) {
        return filedNames[name] || defaultFieldNames[name]; // For old compatibility
      }

      return fieldNames[name] || defaultFieldNames[name];
    }
  }, {
    key: "getFieldNames",
    value: function getFieldNames() {
      var _this$props3 = this.props,
          fieldNames = _this$props3.fieldNames,
          filedNames = _this$props3.filedNames;

      if ('filedNames' in this.props) {
        return filedNames; // For old compatibility
      }

      return fieldNames;
    }
  }, {
    key: "getCurrentLevelOptions",
    value: function getCurrentLevelOptions() {
      var _this2 = this;

      var _this$props$options = this.props.options,
          options = _this$props$options === void 0 ? [] : _this$props$options;
      var _this$state$activeVal = this.state.activeValue,
          activeValue = _this$state$activeVal === void 0 ? [] : _this$state$activeVal;
      var result = arrayTreeFilter(options, function (o, level) {
        return o[_this2.getFieldName('value')] === activeValue[level];
      }, {
        childrenKeyName: this.getFieldName('children')
      });

      if (result[result.length - 2]) {
        return result[result.length - 2][this.getFieldName('children')];
      }

      return _toConsumableArray(options).filter(function (o) {
        return !o.disabled;
      });
    }
  }, {
    key: "getActiveOptions",
    value: function getActiveOptions(activeValue) {
      var _this3 = this;

      return arrayTreeFilter(this.props.options || [], function (o, level) {
        return o[_this3.getFieldName('value')] === activeValue[level];
      }, {
        childrenKeyName: this.getFieldName('children')
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          transitionName = _this$props4.transitionName,
          popupClassName = _this$props4.popupClassName,
          _this$props4$options = _this$props4.options,
          options = _this$props4$options === void 0 ? [] : _this$props4$options,
          disabled = _this$props4.disabled,
          builtinPlacements = _this$props4.builtinPlacements,
          popupPlacement = _this$props4.popupPlacement,
          children = _this$props4.children,
          dropdownRender = _this$props4.dropdownRender,
          restProps = _objectWithoutProperties(_this$props4, ["prefixCls", "transitionName", "popupClassName", "options", "disabled", "builtinPlacements", "popupPlacement", "children", "dropdownRender"]); // Did not show popup when there is no options


      var menus = /*#__PURE__*/React.createElement("div", null);
      var emptyMenuClassName = '';

      if (options && options.length > 0) {
        menus = /*#__PURE__*/React.createElement(Menus, _extends({}, this.props, {
          fieldNames: this.getFieldNames(),
          defaultFieldNames: this.defaultFieldNames,
          activeValue: this.state.activeValue,
          onSelect: this.handleMenuSelect,
          onItemDoubleClick: this.handleItemDoubleClick,
          visible: this.state.popupVisible
        }));
      } else {
        emptyMenuClassName = " ".concat(prefixCls, "-menus-empty");
      }

      var popupNode = menus;

      if (dropdownRender) {
        popupNode = dropdownRender(menus);
      }

      return /*#__PURE__*/React.createElement(Trigger, _extends({
        ref: this.saveTrigger
      }, restProps, {
        popupPlacement: popupPlacement,
        builtinPlacements: builtinPlacements,
        popupTransitionName: transitionName,
        action: disabled ? [] : ['click'],
        popupVisible: disabled ? false : this.state.popupVisible,
        onPopupVisibleChange: this.handlePopupVisibleChange,
        prefixCls: "".concat(prefixCls, "-menus"),
        popupClassName: popupClassName + emptyMenuClassName,
        popup: popupNode
      }), /*#__PURE__*/React.cloneElement(children, {
        onKeyDown: this.handleKeyDown,
        tabIndex: disabled ? undefined : 0
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _prevState$prevProps = prevState.prevProps,
          prevProps = _prevState$prevProps === void 0 ? {} : _prevState$prevProps;
      var newState = {
        prevProps: nextProps
      };

      if ('value' in nextProps && !isEqualArrays(prevProps.value, nextProps.value)) {
        newState.value = nextProps.value || []; // allow activeValue diff from value
        // https://github.com/ant-design/ant-design/issues/2767

        if (!('loadData' in nextProps)) {
          newState.activeValue = nextProps.value || [];
        }
      }

      if ('popupVisible' in nextProps) {
        newState.popupVisible = nextProps.popupVisible;
      }

      return newState;
    }
  }]);

  return Cascader;
}(React.Component);

Cascader.defaultProps = {
  onChange: function onChange() {},
  onPopupVisibleChange: function onPopupVisibleChange() {},
  disabled: false,
  transitionName: '',
  prefixCls: 'rc-cascader',
  popupClassName: '',
  popupPlacement: 'bottomLeft',
  builtinPlacements: BUILT_IN_PLACEMENTS,
  expandTrigger: 'click',
  fieldNames: {
    label: 'label',
    value: 'value',
    children: 'children'
  },
  expandIcon: '>'
};
export default Cascader;