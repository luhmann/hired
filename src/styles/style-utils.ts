export const color = Object.freeze({
  charcoral: '#364756',
  cadetBlue: '#65A6A4',
  hookersGreen: '#4E8566',
  mantis: '#65BF6B',
  deepChestnut: '#BF4F45',
  middleGreen: '#4caf50',
  mayGreen: '#43a047',
  vermilion: '#f44336',
  cgRed: '#e53935',

  azure: '#007aff',

  black: '#000',
  silver: '#BFBFC1',
  spanishGray: '#999',
  white: '#fff',
  whiteSmoke: '#f5f5f5'

})

export function gridCell(cols: number): string {
  return `
    flex: 0 0 ${cols * 8.3}%
  `
}

export function center(): string {
  return `
    align-items: center;
    display: flex;
    justify-content: center;
  `
}

export const gridBaseUnit = 8

export function cells(amount: number): string {
  return `${gridBaseUnit * amount}px`
}

export const standardHPadding = cells(2)

export const fontSizes = Object.freeze({
  headline: '1.333rem',
  standard: '1rem'
})

export function ellipsis(width: string = '100%'): string {
  return`
    max-width: ${width};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  `
}
