# Mistakes/Improvements:

### Routing

- [x] All routes could be lazy loaded. https://reactjs.org/docs/code-splitting.html#reactlazy to make the app more lightweight initially

### `NavBar`

- [x] Should rely more on html semantics: Either it should be a list `<ul>` or `nav` of anchor tags `<a>`

### `CustomButton`

- [x] Despite its modularity and consequent re-usability, `CustomButton` component should extend all properties that a HTML button does instead of implementing its own API `ICustomButton`
- [?] `interface ICustomButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> « styleType?: ButtonstyleType »`
- [x] Should be more explicit that `CustomButton` is indeed a `<button>` in the `index.tsx` otherwise one have to check it inside `styles.tsx`. In terms of semantics, `<Container>` should be something that wraps content not a button.
- [x] `ButtonstyleType` -> `ButtonStyleType` (naming conventions)

### `PagehigherOrderComponent` -> `PageHigherOrderComponent`

- [x] Higher order components are already a bit outdated like class components.
- [x] Hooks or composable components are +/- the standard right now

### Usage of Higher Order components like `export default PagehigherOrderComponent(COMPONENT)`

- [x] hinders search
- [x] When looking at `AppRoutes` if one tries to see the component of any route, one is redirected to the source code of `PagehigherOrderComponent`
- [x] Are already a bit outdated like class components.
- [x] Hooks or composable components are +/- the standard right now

### `preSet.tsx`

- [x] under `hooks/` should be `usePreSet.tsx`
- [x] What does `preSet` mean? A better (explanatory) name would be helpful
- [x] `mockWithSavedCities` is typed as `any[]`. `Any`s should be avoided as much as possible.
- [x] `mockWithSavedCities.filter((item, index) => mockWithSavedCities.indexOf(item) === index)`
- [x] Probably unnecessary if you use a Javascript `Set` or a simple object (`«»`) to take care of duplicated items
- [x] Shouldn't `citiesToChoose` have the same elements of `featuredCities`? Why do you need separate variables?
- [x] `setdataWeathers` -> `setDataWeathers` (naming conventions)
- [x] Code tip: `const weathers = await Promise.all(featuredCities.map(weatherServices.getCityWeather))`
- [x] Too much confusion with the relation between all these variables: `citiesToChoose`, `dataWeathers`, `citiesWaitingData` and `featuredCities`
- [x] All the methods that use these variables are super confusing to understand. Why do they do it? Which variables should be affected? etc...
- [x] Suggestion: What if you just have 1 state variable that is a map (an object `«»`) like: `« Lisboa: « weatherData: null, isLoading: true », Bangkok: « weatherData: « ... », isLoading: false »`

### `useEffect` on `AddCityMenu`

- [x] The usage of `useEffect`s should be avoided as much as possible unless they are really needed.
- [x] They are considered an hack to make things work (a hammering) most of the times. Why a hack? Because you want to intercept the lifecycle and do something
- [x] What you probably want to do is: the `onClose` should have an internal behavior that cleans `newCityMessage`
- [x] This is much better because you only trigger changes on state as result of user actions and not during the component's lifecycle

### `CityPicker`

- [x] Should be a component that contains all cities (`<ul>`) because it allows to pick cities
- [x] Each city should be a `<li>` and accessible through the usage of the `Tab` key
- [x] Pressing the `Enter` key should result in the same interaction as the `onClick`

### `ChooseCity`

- [x] `[showAddCityMenu, setAddCityMenu] = useState<boolean>(false)`
- [x] `showAddCityMenu` is not a method/function. Functions should indeed be named with verbs like `show` `set` etc..
- [x] This could be called `isAddCityMenuOpen` or `isAddCityMenuVisible`

### `import « isMobile » from 'react-device-detect'` could possibly be replaced by css media-queries

### Cached API request responses:

- [x] Will be staled indefinitely. An expiration timestamp must be added otherwise the weather data of each city will be the same forever unless the user knows how to `localStorage.clear()` (of course he doesn't, we do)

### No global error fallback/handler. Any problem that occurs beyond the ones expected can severely compromise UX.

- [?] Implementing an Error Boundary would fix the problem plus executing an extra check on the result of the 'fetch' like 'if (!response.ok) « throw Error('Something went wrong') »' https://reactjs.org/docs/error-boundaries.html

### Compilation warnings should be avoided

- [x] `src/hooks/preSet.tsx Line 186:6: React Hook useEffect has missing dependencies: 'getCitiesWeatherOnAppInit' and 'hasSomePreSettedCity'. Either include them or remove the dependency array`

### `fetch` response `ok` status should be checked because:

> [] A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.`

### [x] A test for the temperature conversion could have been implemented

### [?] Browser console errors: `Warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>.`

### Loading state:

- [x] No loading state when locations are added and the user quickly goes clicks on `Ready!`. Perceived easily under slower networks.

### [x] Tests could have been implemented to test e.g: Function that converts temperatures

### Temperature texts, percentage numbers and wind speeds should have been properly localized (intl)

- [x] Browser's native Intl.NumberFormat API supports all those units

### Dates/Timestamps should have been properly localized (intl)

- [x] Browser's native Intl.DateTimeFormat API and language/locale could have been used

# Positive remarks:

- Tests
- Lightweight app (no unnecessary packages installed)
- UI is responsive for all resolutions (Mobile <-> Desktop)
- Extra effort to make the app even more appealing and useful

# Challenge

- Since you introduced more than what was asked very quickly, can you add a functionality that gives the opportunity
  to re-fetch/update the weather of a specific city? Deleting a city can also be another functionality but refetching is more interesting.
