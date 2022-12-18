const unixTimestampToMyLocalTime = ({ timestamp }: { timestamp: number }) => {
  const date = new Date(timestamp * 1000)

  const twoDigits = (value: number) => {
    return ('0' + value).slice(-2)
  }

  const hours = date.getHours()
  const ampmHour = twoDigits(hours > 12 ? hours - 12 : hours)
  const minutes = twoDigits(date.getMinutes())
  const ampm = date.getHours() < 12 ? 'AM' : 'PM'

  return `${ampmHour}:${minutes} ${ampm}`
}

export default unixTimestampToMyLocalTime
