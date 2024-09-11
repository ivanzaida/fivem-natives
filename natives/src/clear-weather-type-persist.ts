/**
 * MISC:CLEAR_WEATHER_TYPE_PERSIST
 *
 * 0xA21EFB60FCA3D0F6

 * 
 * ------------------------------------------------------------------
 */
export function clearWeatherTypePersist(): void {
	const clearWeatherTypePersist_result = Citizen.invokeNative<void>('0xA21EFB60FCA3D0F6', );
	return clearWeatherTypePersist_result;
}