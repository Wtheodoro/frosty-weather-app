// (0 °C × 9/5) + 32 = 32 °F
const celsiusToFahrenheit = (tempInCelsius: number) => {
  const tempoInFahrenheit = tempInCelsius * (9 / 5) + 32

  return tempoInFahrenheit
}

export default celsiusToFahrenheit
