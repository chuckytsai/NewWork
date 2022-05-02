import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import * as React from 'react';
import arrayTreeFilter from 'array-tree-filter';

var Menus = /*#__PURE__*/function (_React$Component) {
  _inherits(Menus, _React$Component);

  var _super = _createSuper(Menus);

  function Menus() {
    var _this;

    _classCallCheck(this, Menus);

    _this = _super.apply(this, arguments);
    _this.menuItems = {};

    _this.saveMenuItem = function (index) {
      return function (node) {
        _this.menuItems[index] = node;
      };
    };

    return _this;
  }

  _createClass(Menus, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollActiveItemToView();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.visible && this.props.visible) {
        this.scrollActiveItemToView();
      }
    }
  }, {
    key: "getFieldName",
    value: function getFieldName(name) {
      var _this$props = this.props,
          fieldNames = _this$props.fieldNames,
          defaultFieldNames = _this$props.defaultFieldNames; // 防止只设置单个属性的名字

      return fieldNames[name] || defaultFieldNames[name];
    }
  }, {
    key: "getOption",
    value: function getOption(option, menuIndex) {
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          expandTrigger = _this$props2.expandTrigger,
          expandIcon = _this$props2.expandIcon,
          loadingIcon = _this$props2.loadingIcon;
      var onSelect = this.props.onSelect.bind(this, option, menuIndex);
      var onItemDoubleClick = this.props.onItemDoubleClick.bind(this, option, menuIndex);
      var expandProps = {
        onClick: onSelect,
        onDoubleClick: onItemDoubleClick
      };
      var menuItemCls = "".concat(prefixCls, "-menu-item");
      var expandIconNode = null;
      var hasChildren = option[this.getFieldName('children')] && option[this.getFieldName('children')].length > 0;

      if (hasChildren || option.isLeaf === false) {
        menuItemCls += " ".concat(prefixCls, "-menu-item-expand");

        if (!option.loading) {
          expandIconNode = /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-menu-item-expand-icon")
          }, expandIcon);
        }
      }

      if (expandTrigger === 'hover' && (hasChildren || option.isLeaf === false)) {
        expandProps = {
          onMouseEnter: this.delayOnSelect.bind(this, onSelect),
          onMouseLeave: this.delayOnSelect.bind(this),
          onClick: onSelect
        };
      }

      if (this.isActiveOption(option, menuIndex)) {
        menuItemCls += " ".concat(prefixCls, "-menu-item-active");
        expandProps.ref = this.saveMenuItem(menuIndex);
      }

      if (option.disabled) {
        menuItemCls += " ".concat(prefixCls, "-menu-item-disabled");
      }

      var loadingIconNode = null;

      if (option.loading) {
        menuItemCls += " ".concat(prefixCls, "-menu-item-loading");
        loadingIconNode = loadingIcon || null;
      }

      var title = '';

      if ('title' in option) {
        // eslint-disable-next-line prefer-destructuring
        title = option.title;
      } else if (typeof option[this.getFieldName('label')] === 'string') {
        title = option[this.getFieldName('label')];
      }

      return /*#__PURE__*/React.createElement("li", _extends({
        key: option[this.getFieldName('value')],
        className: menuItemCls,
        title: title
      }, expandProps, {
        role: "menuitem",
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        }
      }), option[this.getFieldName('label')], expandIconNode, loadingIconNode);
    }
  }, {
    key: "getActiveOptions",
    value: function getActiveOptions(values) {
      var _this2 = this;

      var options = this.props.options;
      var activeValue = values || this.props.activeValue;
      return arrayTreeFilter(options, function (o, level) {
        return o[_this2.getFieldName('value')] === activeValue[level];
      }, {
        childrenKeyName: this.getFieldName('children')
      });
    }
  }, {
    key: "getShowOptions",
    value: function getShowOptions() {
      var _this3 = this;

      var options = this.props.options;
      var result = this.getActiveOptions().map(function (activeOption) {
        return activeOption[_this3.getFieldName('children')];
      }).filter(function (activeOption) {
        return !!activeOption && activeOption.length > 0;
      });
      result.unshift(options);
      return result;
    }
  }, {
    key: "delayOnSelect",
    value: function delayOnSelect(onSelect) {
      var _this4 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }

      if (typeof onSelect === 'function') {
        this.delayTimer = window.setTimeout(function () {
          onSelect(args);
          _this4.delayTimer = null;
        }, 150);
      }
    }
  }, {
    key: "scrollActiveItemToView",
    value: function scrollActiveItemToView() {
      // scroll into view
      var optionsLength = this.getShowOptions().length; // eslint-disable-next-line no-plusplus

      for (var i = 0; i < optionsLength; i++) {
        var itemComponent = this.menuItems[i];

        if (itemComponent && itemComponent.parentElement) {
          itemComponent.parentElement.scrollTop = itemComponent.offsetTop;
        }
      }
    }
  }, {
    key: "isActiveOption",
    value: function isActiveOption(option, menuIndex) {
      var _this$props$activeVal = this.props.activeValue,
          activeValue = _this$props$activeVal === void 0 ? [] : _this$props$activeVal;
      return activeValue[menuIndex] === option[this.getFieldName('value')];
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          dropdownMenuColumnStyle = _this$props3.dropdownMenuColumnStyle;
      return /*#__PURE__*/React.createElement("div", null, this.getShowOptions().map(function (options, menuIndex) {
        return /*#__PURE__*/React.createElement("ul", {
          className: "".concat(prefixCls, "-menu"),
          key: menuIndex,
          style: dropdownMenuColumnStyle
        }, options.map(function (option) {
          return _this5.getOption(option, menuIndex);
        }));
      }));
    }
  }]);

  return Menus;
}(React.Component);

Menus.defaultProps = {
  options: [],
  value: [],
  activeValue: [],
  onSelect: function onSelect() {},
  prefixCls: 'rc-cascader-menus',
  visible: false,
  expandTrigger: 'click'
};
export default Menus;