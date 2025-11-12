/**
 * MISC:CLEAR_WEATHER_TYPE_NOW_PERSIST_NETWORK
 *
 * 0x4EAA4126FEE56C40

 * 
 * Clears any persisting weather and allows a blend back to the network global timer
 * A transition time of 0 will instantly snap
 * Specify in milliseconds
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} transitionTime
 */
export function clearWeatherTypeNowPersistNetwork(transitionTime: number): void {
	const clearWeatherTypeNowPersistNetwork_result = Citizen.invokeNative<void>('0x4EAA4126FEE56C40', transitionTime);
	return clearWeatherTypeNowPersistNetwork_result;
}