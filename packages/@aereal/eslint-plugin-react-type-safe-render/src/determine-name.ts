import { ImportSpecifier, ImportDefaultSpecifier, ImportNamespaceSpecifier, ExportSpecifier } from "estree"
import { starSpecifier } from "./constants"

export const determineName = (
  specifier: ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportSpecifier
): string => {
  if (specifier.type === "ImportDefaultSpecifier") {
    return "default"
  }
  if (specifier.type === "ImportNamespaceSpecifier") {
    return starSpecifier
  }
  if (specifier.type === "ImportSpecifier") {
    return specifier.imported.name
  }
  return specifier.local.name
}
