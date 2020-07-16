import { rule } from "./rule"

const pluginName = "@aereal/react-type-safe-render"
const ruleName = "no-react-dom-render"
const qualifiedRuleName = `${pluginName}/${ruleName}`

const config = {
  configs: [
    {
      recommended: {
        plugins: [pluginName],
        rules: {
          [qualifiedRuleName]: "error",
        },
      },
    },
  ],
  rules: {
    [ruleName]: rule,
  },
}
module.exports = config
