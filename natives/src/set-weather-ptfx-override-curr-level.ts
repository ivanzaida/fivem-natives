/**
 * GRAPHICS:SET_WEATHER_PTFX_OVERRIDE_CURR_LEVEL
 *
 * 0x4E6B849A6CDF70A3

 * 
 * ------------------------------------------------------------------
 * @param {number} currLevel
 */
export function setWeatherPtfxOverrideCurrLevel(currLevel: number): void {
	const setWeatherPtfxOverrideCurrLevel_result = Citizen.invokeNative<void>('0x4E6B849A6CDF70A3', currLevel);
	return setWeatherPtfxOverrideCurrLevel_result;
}