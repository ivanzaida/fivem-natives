/**
 * PLAYER:GET_WANTED_LEVEL_RADIUS
 *
 * 0xF4141D223F2B1C76

 * 
 * Remnant from GTA IV. Does nothing in GTA V.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} wantedLevel
 * @returns {number}  
 */
export function getWantedLevelRadius(wantedLevel: number): number {
	const getWantedLevelRadius_result = Citizen.invokeNative<number>('0xF4141D223F2B1C76', wantedLevel);
	return getWantedLevelRadius_result;
}