/**
 * MISC:SET_WEATHER_TYPE_NOW_PERSIST
 *
 * 0xE38A58649E049502

 * 
 * The weather string are in weather.dat file
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
export function setWeatherTypeNowPersist(newWeather: string): void {
	const setWeatherTypeNowPersist_result = Citizen.invokeNative<void>('0xE38A58649E049502', newWeather);
	return setWeatherTypeNowPersist_result;
}