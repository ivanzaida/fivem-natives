/**
 * MISC:SET_WEATHER_TYPE_PERSIST
 *
 * 0xFD5A87843250F1B3

 * 
 * The weather type for each level is stored in weather.dat in X:\"current project"\build\dev\common\data\levels\"the level you want"\weather.dat
 * The weather types currently are
 * EXTRASUNNY, CLEAR, CLOUDS, SMOG, CLOUDY, OVERCAST, RAIN, THUNDER, CLEARING, NEUTRAL, SNOWLIGHT, SNOW, BLIZZARD
 * 
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOW"
 * "SNOWLIGHT"
 * "BLIZZARD"
 * "HALLOWEEN"
 * "NEUTRAL"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} newWeather
 */
export function setWeatherTypePersist(newWeather: string): void {
	const setWeatherTypePersist_result = Citizen.invokeNative<void>('0xFD5A87843250F1B3', newWeather);
	return setWeatherTypePersist_result;
}