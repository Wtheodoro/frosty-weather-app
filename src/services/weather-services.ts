import API_URL from './api'

const weatherServices = {
  getCityWeather: async (city: string) =>
    await fetch(
      `${API_URL}/weather?appid=${process.env.REACT_APP_API_KEY}&q=${city}&units=metric`
    ).then(async (response) => {
      if (!response.ok) {
        return response
          .json()
          .catch((error) => {
            // Couldn't parse the JSON
            throw new Error(error)
          })
          .then(({ message }) => {
            // Got valid JSON with error response, use it
            throw new Error(message || response.status)
          })
      }
      // Successful response, parse the JSON and return the data
      return response.json()
    }),
}

export default weatherServices
