/**
 * MISC:SET_WEATHER_TYPE_NOW
 *
 * 0xF286E683D1E1F101

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
export function setWeatherTypeNow(newWeather: string): void {
	const setWeatherTypeNow_result = Citizen.invokeNative<void>('0xF286E683D1E1F101', newWeather);
	return setWeatherTypeNow_result;
}