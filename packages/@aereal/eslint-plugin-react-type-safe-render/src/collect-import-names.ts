import { SourceCode } from "eslint"
import { ImportNames, newImportNames, Specifier } from "./import-names"
import { determineName } from "./determine-name"
import { starSpecifier } from "./constants"
import { ListeningNode } from "./listening-node"

export const collectImportNames = (sourceCode: SourceCode, node: ListeningNode): ImportNames => {
  const importNames = newImportNames()
  if (node.type === "ExportAllDeclaration") {
    const starToken = sourceCode.getFirstToken(node, 1)
    if (!starToken) {
      return importNames
    }
    importNames.set(starSpecifier, [{ loc: starToken.loc }])
  } else {
    for (const specifier of node.specifiers) {
      const name = determineName(specifier)
      const specifierData: Specifier = { loc: specifier.loc }
      if (importNames.has(name)) {
        importNames.get(name)?.push(specifierData)
      } else {
        importNames.set(name, [specifierData])
      }
    }
  }
  return importNames
}
