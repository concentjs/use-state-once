import React from 'react';

let cursor = 1;

function evalState(state) {
  return typeof state == 'function' ? state() : state;
}

function incCursor(){
  cursor++;
}

function getUsableCursor() {
  return cursor;
}

export function useStateOnce(state) {
  const curCursor = getUsableCursor();
  const [lockedCursor] = React.useState(curCursor);

  let targetState = 0;
  if (lockedCursor === cursor) {// first render period
    targetState = evalState(state);
    incCursor();
  }
  return React.useState(targetState);
}

export default useStateOnce;