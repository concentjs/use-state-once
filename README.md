
### motivation
upgrade react useState hook, let the state been initialized only one time

## traditional `useState`

```js
import React, { useState } from "react";

function Demo() {
  // if user pass a heavy state to useState
  // this state will been initialized in every render period
  const [heavyState] = useState(Array(1000000));
  return <h3>{heavyState.length}</h3>;
}
```

## with `useStateOnce`
`useStateOnce` accept normal state or function state
if user pass function state to `useStateOnce`, it will only been called one time
so user can completely replace `React.useState` with `useStateOnce`
```js
import React from "react";
import useStateOnce from "use-state-once";

const state = () => {
  console.log("this function will only been called one time");
  return Array(1000000);
};

function Demo() {
  // useStateOnce accept normal state or function state;
  // if user pass function state to useStateOnce, it will only been called one time
  const [heavyState, setHeavyState] = useStateOnce(state);
  return <h3>{heavyState.length}</h3>;
}
```
