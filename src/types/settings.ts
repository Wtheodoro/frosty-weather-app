export interface ISettings {
  isTemperatureInFahrenheit: boolean
  isCountryLocationTime: boolean
}

export interface ISetSetting {
  toggleTemperatureUnit: () => void
  toggleTimeLocation: () => void
}
