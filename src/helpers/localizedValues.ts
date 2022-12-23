const locale = navigator.language

export const localizedTime = (time: Date) => {
  return Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
  }).format(time)
}

export const localizedPercentage = (percent: number) => {
  return Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits: 0,
  }).format(percent)
}

export const localizedSpeed = (speed: number) => {
  return Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'meter-per-second',
  }).format(speed)
}

export const localizedTemperature = (temperature: number, unit = 'celsius') => {
  return Intl.NumberFormat(locale, {
    style: 'unit',
    unit,
    maximumFractionDigits: 0,
  }).format(temperature)
}
