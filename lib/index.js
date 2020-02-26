"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useStateOnce = useStateOnce;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var cursor = 1;

function evalState(state) {
  return typeof state == 'function' ? state() : state;
}

function incCursor() {
  cursor++;
}

function getUsableCursor() {
  return cursor;
}

function useStateOnce(state) {
  var curCursor = getUsableCursor();

  var _React$useState = _react["default"].useState(curCursor),
      lockedCursor = _React$useState[0];

  var targetState = 0;

  if (lockedCursor === cursor) {
    // first render period
    targetState = evalState(state);
    incCursor();
  }

  return _react["default"].useState(targetState);
}

var _default = useStateOnce;
exports["default"] = _default;