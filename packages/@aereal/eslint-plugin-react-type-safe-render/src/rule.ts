import { Rule } from "eslint"
import { Node } from "estree"
import { reactDOMPkg, reactDOMRender, starSpecifier } from "./constants"
import { collectImportNames } from "./collect-import-names"

export const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
  },
  create: (ctx: Rule.RuleContext): Rule.RuleListener => {
    const sourceCode = ctx.getSourceCode()
    const checkNode = (node: Node): void => {
      switch (node.type) {
        case "ExportAllDeclaration":
        case "ImportDeclaration":
        case "ExportNamedDeclaration":
          break
        default:
          return
      }
      if (node.source === null || node.source === undefined) {
        return
      }
      const importSource = `${node.source.value ?? ""}`
      if (importSource !== reactDOMPkg) {
        return
      }

      const importNames = collectImportNames(sourceCode, node)
      if (importNames.has(starSpecifier)) {
        const specifierData = importNames.get(starSpecifier)?.[0]

        ctx.report({
          node,
          message: "Do not use whole react-dom",
          data: {
            importSource,
          },
          ...(specifierData && specifierData.loc ? { loc: specifierData.loc } : {}),
        })
      }

      const specifiers = importNames.get(reactDOMRender)
      if (!specifiers) {
        return
      }

      for (const specifier of specifiers) {
        ctx.report({
          message: "Do not use react-dom.render",
          node,
          data: {
            importSource,
          },
          ...(specifier.loc ? { loc: specifier.loc } : {}),
        })
      }
    }
    return {
      ImportDeclaration: checkNode,
      ExportAllDeclaration: checkNode,
      ExportNamedDeclaration: checkNode,
    }
  },
}
