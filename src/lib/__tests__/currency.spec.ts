import { formatCurrency } from '../currency'

describe('Lib: currentcy', () => {
  it('should format an integer to a currency-string with two decimal zeroes', () => {
    expect(formatCurrency(12)).toBe('12,00 EUR')
  })

  it('should format a floating-point number to a currency string rounded to two decimals', () => {
    expect(formatCurrency(12.235566534323)).toBe('12,24 EUR')
  })
})
