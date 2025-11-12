/**
 * HUD:SET_USE_ISLAND_MAP
 *
 * 0x05E996648244715D

 * 
 * Toggles the Cayo Perico map.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} useIslandMap
 */
export function setUseIslandMap(useIslandMap: boolean): void {
	const setUseIslandMap_result = Citizen.invokeNative<void>('0x05E996648244715D', useIslandMap);
	return setUseIslandMap_result;
}