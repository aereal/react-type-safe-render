[![npm-badge][npm-badge]][npm-permalink]

# react-type-safe-render

## Installation

```
npm i -S @aereal/react-type-safe-render
```

```
yarn add @aereal/react-type-safe-render
```

## Usage

```typescript
import React from "react"
import { safeRender } from "@aereal/react-type-safe-render"

safeRender(
  <div>hi</div>,
  document.querySelector("#main")!
)

const main = document.querySelector("#main")
if (!main) {
  throw new Error("No main element found")
}
safeRender(
  <div>hi</div>,
  main
)

// TypeScript compiler causes error if nullable value passed as a container argument such as below code.
//
// safeRender(
//   <div>hi</div>,
//   document.querySelector("#main")
// )
```

## See also

- [@aereal/eslint-config-react-type-safe-render][eslint-config-react-type-safe-render]: ESLint config that checks if `ReactDOM.render` used

[npm-badge]: https://img.shields.io/npm/v/@aereal/react-type-safe-render
[eslint-config-react-type-safe-render]: ../eslint-config-react-type-safe-render
[npm-permalink]: https://www.npmjs.com/package/@aereal/react-type-safe-render
