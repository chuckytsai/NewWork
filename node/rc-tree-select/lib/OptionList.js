"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));

var _rcTree = _interopRequireDefault(require("rc-tree"));

var _Context = require("./Context");

var _useKeyValueMapping3 = _interopRequireDefault(require("./hooks/useKeyValueMapping"));

var _useKeyValueMap3 = _interopRequireDefault(require("./hooks/useKeyValueMap"));

var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: 'flex',
  overflow: 'hidden',
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};

var OptionList = function OptionList(props, ref) {
  var prefixCls = props.prefixCls,
      height = props.height,
      itemHeight = props.itemHeight,
      virtual = props.virtual,
      options = props.options,
      flattenOptions = props.flattenOptions,
      multiple = props.multiple,
      searchValue = props.searchValue,
      onSelect = props.onSelect,
      onToggleOpen = props.onToggleOpen,
      open = props.open,
      notFoundContent = props.notFoundContent,
      onMouseEnter = props.onMouseEnter;

  var _React$useContext = React.useContext(_Context.SelectContext),
      checkable = _React$useContext.checkable,
      checkedKeys = _React$useContext.checkedKeys,
      halfCheckedKeys = _React$useContext.halfCheckedKeys,
      treeExpandedKeys = _React$useContext.treeExpandedKeys,
      treeDefaultExpandAll = _React$useContext.treeDefaultExpandAll,
      treeDefaultExpandedKeys = _React$useContext.treeDefaultExpandedKeys,
      onTreeExpand = _React$useContext.onTreeExpand,
      treeIcon = _React$useContext.treeIcon,
      showTreeIcon = _React$useContext.showTreeIcon,
      switcherIcon = _React$useContext.switcherIcon,
      treeLine = _React$useContext.treeLine,
      treeNodeFilterProp = _React$useContext.treeNodeFilterProp,
      loadData = _React$useContext.loadData,
      treeLoadedKeys = _React$useContext.treeLoadedKeys,
      treeMotion = _React$useContext.treeMotion,
      onTreeLoad = _React$useContext.onTreeLoad;

  var treeRef = React.useRef();
  var memoOptions = (0, _useMemo.default)(function () {
    return options;
  }, [open, options], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  });

  var _useKeyValueMap = (0, _useKeyValueMap3.default)(flattenOptions),
      _useKeyValueMap2 = (0, _slicedToArray2.default)(_useKeyValueMap, 2),
      cacheKeyMap = _useKeyValueMap2[0],
      cacheValueMap = _useKeyValueMap2[1];

  var _useKeyValueMapping = (0, _useKeyValueMapping3.default)(cacheKeyMap, cacheValueMap),
      _useKeyValueMapping2 = (0, _slicedToArray2.default)(_useKeyValueMapping, 2),
      getEntityByKey = _useKeyValueMapping2[0],
      getEntityByValue = _useKeyValueMapping2[1]; // ========================== Values ==========================


  var valueKeys = React.useMemo(function () {
    return checkedKeys.map(function (val) {
      var entity = getEntityByValue(val);
      return entity ? entity.key : null;
    });
  }, [checkedKeys, getEntityByValue]);
  var mergedCheckedKeys = React.useMemo(function () {
    if (!checkable) {
      return null;
    }

    return {
      checked: valueKeys,
      halfChecked: halfCheckedKeys
    };
  }, [valueKeys, halfCheckedKeys, checkable]); // ========================== Scroll ==========================

  React.useEffect(function () {
    // Single mode should scroll to current key
    if (open && !multiple && valueKeys.length) {
      var _treeRef$current;

      (_treeRef$current = treeRef.current) === null || _treeRef$current === void 0 ? void 0 : _treeRef$current.scrollTo({
        key: valueKeys[0]
      });
    }
  }, [open]); // ========================== Search ==========================

  var lowerSearchValue = String(searchValue).toLowerCase();

  var filterTreeNode = function filterTreeNode(treeNode) {
    if (!lowerSearchValue) {
      return false;
    }

    return String(treeNode[treeNodeFilterProp]).toLowerCase().includes(lowerSearchValue);
  }; // =========================== Keys ===========================


  var _React$useState = React.useState(treeDefaultExpandedKeys),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      expandedKeys = _React$useState2[0],
      setExpandedKeys = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      searchExpandedKeys = _React$useState4[0],
      setSearchExpandedKeys = _React$useState4[1];

  var mergedExpandedKeys = React.useMemo(function () {
    if (treeExpandedKeys) {
      return (0, _toConsumableArray2.default)(treeExpandedKeys);
    }

    return searchValue ? searchExpandedKeys : expandedKeys;
  }, [expandedKeys, searchExpandedKeys, lowerSearchValue, treeExpandedKeys]);
  React.useEffect(function () {
    if (searchValue) {
      setSearchExpandedKeys(flattenOptions.map(function (o) {
        return o.key;
      }));
    }
  }, [searchValue]);

  var onInternalExpand = function onInternalExpand(keys) {
    setExpandedKeys(keys);
    setSearchExpandedKeys(keys);

    if (onTreeExpand) {
      onTreeExpand(keys);
    }
  }; // ========================== Events ==========================


  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };

  var onInternalSelect = function onInternalSelect(_, _ref) {
    var key = _ref.node.key;
    var entity = getEntityByKey(key, checkable ? 'checkbox' : 'select');

    if (entity !== null) {
      onSelect(entity.data.value, {
        selected: !checkedKeys.includes(entity.data.value)
      });
    }

    if (!multiple) {
      onToggleOpen(false);
    }
  }; // ========================= Keyboard =========================


  var _React$useState5 = React.useState(null),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      activeKey = _React$useState6[0],
      setActiveKey = _React$useState6[1];

  var activeEntity = getEntityByKey(activeKey);
  React.useImperativeHandle(ref, function () {
    var _treeRef$current2;

    return {
      scrollTo: (_treeRef$current2 = treeRef.current) === null || _treeRef$current2 === void 0 ? void 0 : _treeRef$current2.scrollTo,
      onKeyDown: function onKeyDown(event) {
        var _treeRef$current3;

        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case _KeyCode.default.UP:
          case _KeyCode.default.DOWN:
          case _KeyCode.default.LEFT:
          case _KeyCode.default.RIGHT:
            (_treeRef$current3 = treeRef.current) === null || _treeRef$current3 === void 0 ? void 0 : _treeRef$current3.onKeyDown(event);
            break;
          // >>> Select item

          case _KeyCode.default.ENTER:
            {
              var _ref2 = (activeEntity === null || activeEntity === void 0 ? void 0 : activeEntity.data) || {},
                  selectable = _ref2.selectable,
                  value = _ref2.value;

              if (selectable !== false) {
                onInternalSelect(null, {
                  node: {
                    key: activeKey
                  },
                  selected: !checkedKeys.includes(value)
                });
              }

              break;
            }
          // >>> Close

          case _KeyCode.default.ESC:
            {
              onToggleOpen(false);
            }
        }
      },
      onKeyUp: function onKeyUp() {}
    };
  }); // ========================== Render ==========================

  if (memoOptions.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      role: "listbox",
      className: "".concat(prefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }

  var treeProps = {};

  if (treeLoadedKeys) {
    treeProps.loadedKeys = treeLoadedKeys;
  }

  if (mergedExpandedKeys) {
    treeProps.expandedKeys = mergedExpandedKeys;
  }

  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: onListMouseDown,
    onMouseEnter: onMouseEnter
  }, activeEntity && open && /*#__PURE__*/React.createElement("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, activeEntity.data.value), /*#__PURE__*/React.createElement(_rcTree.default, (0, _extends2.default)({
    ref: treeRef,
    focusable: false,
    prefixCls: "".concat(prefixCls, "-tree"),
    treeData: memoOptions,
    height: height,
    itemHeight: itemHeight,
    virtual: virtual,
    multiple: multiple,
    icon: treeIcon,
    showIcon: showTreeIcon,
    switcherIcon: switcherIcon,
    showLine: treeLine,
    loadData: searchValue ? null : loadData,
    motion: treeMotion // We handle keys by out instead tree self
    ,
    checkable: checkable,
    checkStrictly: true,
    checkedKeys: mergedCheckedKeys,
    selectedKeys: !checkable ? valueKeys : [],
    defaultExpandAll: treeDefaultExpandAll
  }, treeProps, {
    // Proxy event out
    onActiveChange: setActiveKey,
    onSelect: onInternalSelect,
    onCheck: onInternalSelect,
    onExpand: onInternalExpand,
    onLoad: onTreeLoad,
    filterTreeNode: filterTreeNode
  })));
};

var RefOptionList = /*#__PURE__*/React.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
var _default = RefOptionList;
exports.default = _default;