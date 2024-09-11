/**
 * PLAYER:SET_MAX_WANTED_LEVEL
 *
 * 0xDAE61414743C8D1D

 * 
 * ------------------------------------------------------------------
 * @param {number} newMaxLevel
 */
export function setMaxWantedLevel(newMaxLevel: number): void {
	const setMaxWantedLevel_result = Citizen.invokeNative<void>('0xDAE61414743C8D1D', newMaxLevel);
	return setMaxWantedLevel_result;
}