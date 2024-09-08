export enum ShopItemQueryDefault {
  ITEMS_PER_PAGE = 9,
  SORT_DIRECTION_DESC = 'desc',
  SORTED_BY_ADDED_AT = 'added'
}

export enum Price {
  MIN = 100,
  MAX = 1_000_000
}

export enum NameLength {
  MIN = 10,
  MAX = 100
}

export enum DescriptionLength {
  MIN = 20,
  MAX = 1024
}

export enum CodeLength {
  MIN = 5,
  MAX = 40
}

export enum ShopItemError {
  CODE_TOO_SHORT = 'Guitar code is too short',
  CODE_TOO_LONG = 'Guitar code is too long',
  DESCRIPTION_TOO_SHORT = 'Guitar description is too short',
  DESCRIPTION_TOO_LONG = 'Guitar description is too long',
  NAME_TOO_SHORT = 'Guitar name is too short',
  NAME_TOO_LONG = 'Guitar name is too long',
  PRICE_TOO_LOW = 'Guitar price is too low',
  PRICE_TOO_HIGH = 'Guitar price is too high',
  INCORRECT_STINGS_NUMBER  = 'A guitar has to have 4, 6, 7 or 12 strings',
  WRONG_TYPE = 'A guitar can be of Electric, Acoustic, Ukulele type'
}
