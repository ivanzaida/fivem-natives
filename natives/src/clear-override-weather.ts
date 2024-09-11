/**
 * MISC:CLEAR_OVERRIDE_WEATHER
 *
 * 0x58A3B74F26D2B532

 * 
 * ------------------------------------------------------------------
 */
export function clearOverrideWeather(): void {
	const clearOverrideWeather_result = Citizen.invokeNative<void>('0x58A3B74F26D2B532', );
	return clearOverrideWeather_result;
}