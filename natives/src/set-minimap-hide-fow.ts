/**
 * HUD:SET_MINIMAP_HIDE_FOW
 *
 * 0x84DE06FB962FF36D

 * 
 * If true, the entire map will be revealed.
 * 
 * FOW = Fog of War
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} hideFow
 */
export function setMinimapHideFow(hideFow: boolean): void {
	const setMinimapHideFow_result = Citizen.invokeNative<void>('0x84DE06FB962FF36D', hideFow);
	return setMinimapHideFow_result;
}