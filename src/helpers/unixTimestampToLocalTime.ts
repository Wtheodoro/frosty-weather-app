const unixTimestampToLocalTime = ({
  timestamp,
  location,
}: {
  timestamp: number
  location: string
}) => {
  const date = new Date(timestamp * 1000)

  return date.toLocaleTimeString(location)
}

export default unixTimestampToLocalTime
