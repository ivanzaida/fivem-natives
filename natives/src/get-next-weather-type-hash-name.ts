/**
 * MISC:GET_NEXT_WEATHER_TYPE_HASH_NAME
 *
 * 0x60B554F782F2E6A6

 * 
 * Gets the hash name of the next weather type (the one we are currently interpolating towards)
 * 
 * Returns weather name hash
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNextWeatherTypeHashName(): number {
	const getNextWeatherTypeHashName_result = Citizen.invokeNative<number>('0x60B554F782F2E6A6', );
	return getNextWeatherTypeHashName_result;
}