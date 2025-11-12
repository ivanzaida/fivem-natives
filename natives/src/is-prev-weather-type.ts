/**
 * MISC:IS_PREV_WEATHER_TYPE
 *
 * 0x4DC8DC4C28B3BADA

 * 
 * Checks if the previous weather type (the one we are currently interpolating from) is the same as the string passed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} weather
 * @returns {boolean}  
 */
export function isPrevWeatherType(weather: string): boolean {
	const isPrevWeatherType_result = Citizen.invokeNative<boolean>('0x4DC8DC4C28B3BADA', weather);
	return isPrevWeatherType_result;
}