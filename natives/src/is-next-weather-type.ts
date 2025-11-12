/**
 * MISC:IS_NEXT_WEATHER_TYPE
 *
 * 0x79C890C56ADBF83B

 * 
 * Checks if the next weather type (the one we are currently interpolating towards) is the same as the string passed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} weather
 * @returns {boolean}  
 */
export function isNextWeatherType(weather: string): boolean {
	const isNextWeatherType_result = Citizen.invokeNative<boolean>('0x79C890C56ADBF83B', weather);
	return isNextWeatherType_result;
}