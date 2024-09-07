export type EntityIdType = string;

export interface Entity<T extends EntityIdType> {
  id?: T;
  toPlainObject(): Record<string, unknown>;
}
