/**
 * MISC:GET_PREV_WEATHER_TYPE_HASH_NAME
 *
 * 0xED2E53B1A3927830

 * 
 * Gets the hash name of the previous weather type (the one we are currently interpolating from)
 * 
 * Returns current weather name hash
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getPrevWeatherTypeHashName(): number {
	const getPrevWeatherTypeHashName_result = Citizen.invokeNative<number>('0xED2E53B1A3927830', );
	return getPrevWeatherTypeHashName_result;
}