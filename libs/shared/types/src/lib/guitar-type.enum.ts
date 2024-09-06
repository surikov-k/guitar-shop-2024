export const GuitarType: {
  Electric: 'Electric',
  Acoustic: 'Acoustic',
  Ukulele: 'Ukulele'
} = {
  Electric: 'Electric',
  Acoustic: 'Acoustic',
  Ukulele: 'Ukulele'
}

export type GuitarType = typeof GuitarType[keyof typeof GuitarType]
