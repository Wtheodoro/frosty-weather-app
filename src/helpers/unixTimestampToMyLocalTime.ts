const unixTimestampToMyLocalTime = ({ timestamp }: { timestamp: number }) => {
  const date = new Date(timestamp * 1000)

  const twoDigits = (time: string) => {
    if (time.length === 4) return `0${time}`
    return time
  }

  const hourAndMinuts = date.toLocaleTimeString('US').slice(0, -6)
  const ampm = date.toLocaleTimeString('US').replace(/[^A-Z]/g, '')

  return `${twoDigits(hourAndMinuts)} ${ampm}`
}

export default unixTimestampToMyLocalTime
