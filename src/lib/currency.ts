import * as accounting from 'accounting'

export const formatCurrency = (amount: number): string => (
  accounting.formatMoney(amount, {
    symbol: 'EUR',
    format: '%v %s',
    decimal: ',',
    thousand: '.',
    precision: 2
  })
)
