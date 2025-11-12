/**
 * MISC:SET_OVERRIDE_WEATHEREX
 *
 * 0x43BE2F49C708E7B4

 * 
 * Identical to SET_OVERRIDE_WEATHER but has an additional BOOL param that sets some weather var to 0 if true
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} weather
 * @param {boolean} resetWetness
 */
export function setOverrideWeatherex(weather: string, resetWetness: boolean): void {
	const setOverrideWeatherex_result = Citizen.invokeNative<void>('0x43BE2F49C708E7B4', weather, resetWetness);
	return setOverrideWeatherex_result;
}