export function color(name: string): string {
  const map = {
    charcoral: '#364756',
    cadetBlue: '#65A6A4',
    hookersGreen: '#4E8566',
    mantis: '#65BF6B',
    deepChestnut: '#BF4F45',
    white: '#fff',
    middleGreen: '#4caf50',
    mayGreen: '#43a047',
    vermilion: '#f44336',
    cgRed: '#e53935',

    turquoiseSurf: '#00BCD4',

    darkMediumGray: '#a7a7ab',
    spanishGray: '#999',
    whiteSmoke: '#f5f5f5'
  }

  if (!map[name]) {
    /* tslint:disable-next-line */
    console.error(`Warning no color "${name}" found.`)
  }

  return map[name] || '#000'
}

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

export const standardFontSize = '1rem'
