import { SourceLocation } from "estree"

export interface Specifier {
  readonly loc?: SourceLocation | null
}

export type ImportNames = Map<string, Specifier[]>

export const newImportNames = (): ImportNames => new Map<string, Specifier[]>()
