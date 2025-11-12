/**
 * MISC:SET_OVERRIDE_WEATHER
 *
 * 0x88791F880F624022

 * 
 * Appears to have an optional bool parameter that is unused in the scripts.
 * 
 * If you pass true, something will be set to zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} weather
 */
export function setOverrideWeather(weather: string): void {
	const setOverrideWeather_result = Citizen.invokeNative<void>('0x88791F880F624022', weather);
	return setOverrideWeather_result;
}