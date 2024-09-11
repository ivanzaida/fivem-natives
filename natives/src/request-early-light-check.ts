/**
 * GRAPHICS:REQUEST_EARLY_LIGHT_CHECK
 *
 * 0x9E75427EC4E37CA5

 * 
 * ------------------------------------------------------------------
 */
export function requestEarlyLightCheck(): void {
	const requestEarlyLightCheck_result = Citizen.invokeNative<void>('0x9E75427EC4E37CA5', );
	return requestEarlyLightCheck_result;
}