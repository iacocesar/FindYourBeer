import { Dimensions } from 'react-native'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import colors from 'app/theme/colors'
import moment from 'moment'
export const FORMAT_DATE = 'DD/MM/YYYY'
export const ISO_FORMAT_DATE = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
export const HORIZONTAL_PADDING = 16

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window'
)

export function getImageRatio(src) {
  const { height, width } = resolveAssetSource(src)
  return width / height
}

export function vw(percent) {
  const value = percent * viewportWidth / 100
  return Math.round(value)
}

export function vh(percent) {
  const value = percent * viewportHeight / 100
  return Math.round(value)
}

export function ISODateFormat(date, format = FORMAT_DATE) {
  if (!date) return null
  return moment(date, ISO_FORMAT_DATE)
    .locale('pt-br')
    .format(format)
}

export function ISODateCalcDiff(firstDate, secondDate) {
  if (!firstDate && !secondDate) return null
  const calc = moment(secondDate, ISO_FORMAT_DATE).diff(
    moment(firstDate, ISO_FORMAT_DATE)
  )
  const duration = moment.duration(calc)
  return moment.utc(duration.asMilliseconds()).format('HH:mm')
}

export function round2Decimal(value) {
  return Math.round(value * 100) / 100
}

export function placeDots(string) {
  let iteration = -2
  const arrayWithDots = []

  for (let i = string.length - 1; i > -1; i -= 1) {
    if (iteration % 3 === 0 && i !== 0) {
      arrayWithDots.push(`.${string[i]}`)
    } else {
      arrayWithDots.push(string[i])
    }

    iteration += 1
  }

  return arrayWithDots.reverse().join('')
}

export function stringCurrencyToFloat(str) {
  return parseFloat(
    str
      .split('.')
      .join('')
      .replace(',', '.')
  )
}

export function currencyParser(value, prefix = '', isAbsolute) {
  let stringValue = new String(value) // eslint-disable-line
  let integers = []
  let decimals = ''

  const sign = /-.+/.test(stringValue) ? '-' : ''

  stringValue = stringValue
    .replace(/-/g, '')
    .replace(/,/g, '.')
    .replace(prefix, '')

  if (isAbsolute) {
    const absoluteValues = stringValue.replace(/[^\d]/g, '')
    decimals = absoluteValues.substr(-2, 2)

    integers = placeDots(absoluteValues.slice(0, -2))

    return `${`${prefix + sign + integers},${decimals}`}`
  }

  const splitedValues = stringValue.split('.')

  decimals = splitedValues.length > 1 ? splitedValues.pop() : '00'
  const integerValues = splitedValues.join('')

  integers = placeDots(integerValues)

  if (decimals.length < 2) {
    decimals = `${decimals}0`
  } else if (decimals.length > 2) {
    decimals = decimals.substring(0, 2)
  }

  return `${prefix + sign + integers},${decimals}`
}

export const calculateDataPercentage = (dataArray = [], maxValue) => {
  if (maxValue) {
    return dataArray.map(data => data / maxValue * 100)
  }
  const total = dataArray.reduce((data, nextData) => data + nextData, 0)
  if (total === 0) {
    return dataArray
  }
  return dataArray.map(data => data / total * 100)
}
