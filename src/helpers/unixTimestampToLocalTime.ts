const unixTimestampToLocalTime = ({
  timestamp,
  timezone,
}: {
  timestamp: number
  timezone: number
}) => {
  const date = new Date((timestamp + timezone) * 1000)

  const twoDigits = (value: number) => {
    return ('0' + value).slice(-2)
  }

  const hours = date.getUTCHours()
  const ampmHour = twoDigits(hours > 12 ? hours - 12 : hours)
  const minutes = twoDigits(date.getUTCMinutes())
  const ampm = date.getHours() < 12 ? 'AM' : 'PM'

  return `${ampmHour}:${minutes} ${ampm}`
}

export default unixTimestampToLocalTime
