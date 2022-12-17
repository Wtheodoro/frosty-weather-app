const unixTimestampToMyLocalTime = ({ timestamp }: { timestamp: number }) => {
  const date = new Date(timestamp * 1000)

  return date.toLocaleTimeString('US')
}

export default unixTimestampToMyLocalTime
