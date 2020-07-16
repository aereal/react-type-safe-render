import { ImportDeclaration, ExportAllDeclaration, ExportNamedDeclaration } from "estree"

export type ListeningNode = ImportDeclaration | ExportAllDeclaration | ExportNamedDeclaration
