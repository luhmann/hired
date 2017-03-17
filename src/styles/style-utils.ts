export const color = Object.freeze({
  indigo: '#37474f',
  green: {
    g_400: '#66bb6a',
    g_500: '#4caf50',
    g_600: '#43a047'
  },
  red: {
    g_500: '#f44336',
    g_600: '##e53935',
    g_900: '#b71c1c'
  },

  blue: '#2196f3',

  black: '#000',
  white: '#fff',

  gray: {
    g_50: '#faafa',
    g_100: '#f5f5f5',
    g_200: '#eeeeee',
    g_300: '#e0e0e0',
    g_400: '#bdbdbd',
    g_500: '#9e9e9e',
    g_600: '#757575',
    g_700: '#616161',
    g_800: '#424242',
    g_900: '#212121'
  }
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
  return `
    max-width: ${width};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  `
}
