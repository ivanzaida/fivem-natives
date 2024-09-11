/**
 * HUD:CLEAR_GPS_CUSTOM_ROUTE
 *
 * 0x3C42C704473E4986

 * 
 * ------------------------------------------------------------------
 */
export function clearGpsCustomRoute(): void {
	const clearGpsCustomRoute_result = Citizen.invokeNative<void>('0x3C42C704473E4986', );
	return clearGpsCustomRoute_result;
}