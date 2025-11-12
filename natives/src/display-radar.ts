/**
 * HUD:DISPLAY_RADAR
 *
 * 0x37B894853929BF1A

 * 
 * If Minimap / Radar should be displayed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} displayRadarFlag
 */
export function displayRadar(displayRadarFlag: boolean): void {
	const displayRadar_result = Citizen.invokeNative<void>('0x37B894853929BF1A', displayRadarFlag);
	return displayRadar_result;
}