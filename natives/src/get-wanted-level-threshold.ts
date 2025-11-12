/**
 * PLAYER:GET_WANTED_LEVEL_THRESHOLD
 *
 * 0x30C1D2072FB75567

 * 
 * Drft
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} wantedLevel
 * @returns {number}  
 */
export function getWantedLevelThreshold(wantedLevel: number): number {
	const getWantedLevelThreshold_result = Citizen.invokeNative<number>('0x30C1D2072FB75567', wantedLevel);
	return getWantedLevelThreshold_result;
}