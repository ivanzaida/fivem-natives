/**
 * STREAMING:LOAD_GLOBAL_WATER_FILE
 *
 * 0x548BCB9EBC09A967

 * 
 * 0 - default
 * 1 - HeistIsland
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} waterId
 */
export function loadGlobalWaterFile(waterId: number): void {
	const loadGlobalWaterFile_result = Citizen.invokeNative<void>('0x548BCB9EBC09A967', waterId);
	return loadGlobalWaterFile_result;
}