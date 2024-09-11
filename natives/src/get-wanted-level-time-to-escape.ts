/**
 * PLAYER:GET_WANTED_LEVEL_TIME_TO_ESCAPE
 *
 * 0xBF02D50FC8112D5B

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getWantedLevelTimeToEscape(): number {
	const getWantedLevelTimeToEscape_result = Citizen.invokeNative<number>('0xBF02D50FC8112D5B', );
	return getWantedLevelTimeToEscape_result;
}