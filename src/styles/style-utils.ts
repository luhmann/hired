export function color(name: string):string {
  const map = {
    darkBlue: '#364756',
    lightBlue: '#65A6A4',
    darkGreen: '#4E8566',
    lightGreen: '#65BF6B',
    red: '#BF4F45',
    white: '#fff',
    success: '#4caf50',
    successHover: '#43a047',
    error: '#f44336',
    errorHover: '#e53935'
  }

  return map[name] || '#000'
}

export function gridCell(cols: number):string {
  return `
    flex: 0 0 ${cols * 8.3}%
  `
}

export function center():string {
  return `
    align-items: center
    display: flex
    justify-content: center
  `
}