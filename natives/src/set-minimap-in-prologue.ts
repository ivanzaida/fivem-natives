/**
 * HUD:SET_MINIMAP_IN_PROLOGUE
 *
 * 0x57C73569CFE559CC

 * 
 * Toggles the North Yankton map
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setMinimapInPrologue(active: boolean): void {
	const setMinimapInPrologue_result = Citizen.invokeNative<void>('0x57C73569CFE559CC', active);
	return setMinimapInPrologue_result;
}