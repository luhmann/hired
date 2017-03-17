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

export const shadow = Object.freeze({
  subtle: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  medium: '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)',
  strong: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  distant: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
})

export const maxWidth = '800px'

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
