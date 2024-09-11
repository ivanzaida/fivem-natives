/**
 * HUD:HIDE_HUDMARKERS_THIS_FRAME
 *
 * 0x7D2CDF366EDD8ADD

 * 
 * ------------------------------------------------------------------
 */
export function hideHudmarkersThisFrame(): void {
	const hideHudmarkersThisFrame_result = Citizen.invokeNative<void>('0x7D2CDF366EDD8ADD', );
	return hideHudmarkersThisFrame_result;
}