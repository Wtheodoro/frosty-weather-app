import API_URL from './api'

const weatherServices = {
  getCityWeather: async (city: string) =>
    await fetch(
      `${API_URL}/weather?appid=${process.env.REACT_APP_API_KEY}&q=${city}&units=metric`
    ).then((response) => response.json()),
}

export default weatherServices
