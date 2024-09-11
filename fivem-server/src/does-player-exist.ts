/**
 * CFX:DOES_PLAYER_EXIST
 *
 * 0X12038599

 * Returns whether or not the player exists
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @returns {boolean}  True if the player exists, false otherwise
 */
export function doesPlayerExist(playerSrc: string): boolean {
	const doesPlayerExist_result = Citizen.invokeNative<boolean>('0X12038599', playerSrc);
	return doesPlayerExist_result;
}