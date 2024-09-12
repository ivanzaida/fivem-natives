/**
 * GRAPHICS:SET_WEATHER_PTFX_USE_OVERRIDE_SETTINGS
 *
 * 0xC4551CF3C3F087F3

 * 
 * ------------------------------------------------------------------
 * @param {boolean} useOverrideSettings
 */
export function setWeatherPtfxUseOverrideSettings(useOverrideSettings: boolean): void {
	const setWeatherPtfxUseOverrideSettings_result = Citizen.invokeNative<void>('0xC4551CF3C3F087F3', useOverrideSettings);
	return setWeatherPtfxUseOverrideSettings_result;
}