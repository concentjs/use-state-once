(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (factory((global.ReactControlCenter = {}),global.React));
}(this, (function (exports,React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

    var _React$useState = React.useState(curCursor),
        lockedCursor = _React$useState[0];

    var targetState = 0;

    if (lockedCursor === cursor) {
      // first render period
      targetState = evalState(state);
      incCursor();
    }

    return React.useState(targetState);
  }

  exports.useStateOnce = useStateOnce;
  exports.default = useStateOnce;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
