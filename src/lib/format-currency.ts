import * as numeral from 'numeral'
import 'numeral/locales/de'
numeral.locale('de')

const formatCurrency = (amount: number): string => (
  numeral(amount).format('$0,0.00')
)

export { formatCurrency }
