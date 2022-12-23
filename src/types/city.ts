import { IWeather } from './weather'

export interface ICitiesInformationMap {
  [key: string]: ICity
}

export interface ICity {
  weatherData: IWeather | null
  isLoading: boolean
}
