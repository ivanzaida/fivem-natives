/**
 * HUD:SET_BIGMAP_ACTIVE
 *
 * 0xC2F71CC2AB70CFB1

 * 
 * Toggles the big minimap state like in GTA:Online.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 * @param {boolean} fullMap
 */
export function setBigmapActive(active: boolean, fullMap: boolean = true): void {
	const setBigmapActive_result = Citizen.invokeNative<void>('0xC2F71CC2AB70CFB1', active, fullMap);
	return setBigmapActive_result;
}