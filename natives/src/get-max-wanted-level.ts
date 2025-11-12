/**
 * PLAYER:GET_MAX_WANTED_LEVEL
 *
 * 0xD6436470CD2C1484

 * 
 * Gets the maximum wanted level the player can get.
 * Ranges from 0 to 5.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMaxWantedLevel(): number {
	const getMaxWantedLevel_result = Citizen.invokeNative<number>('0xD6436470CD2C1484', );
	return getMaxWantedLevel_result;
}