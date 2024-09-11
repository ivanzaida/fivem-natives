/**
 * CFX:IS_PLAYER_ACE_ALLOWED
 *
 * 0XDEDAE23D

 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc
 * @param {string} object
 * @returns {boolean}  
 */
export function isPlayerAceAllowed(playerSrc: string, object: string): boolean {
	const isPlayerAceAllowed_result = Citizen.invokeNative<boolean>('0XDEDAE23D', playerSrc, object);
	return isPlayerAceAllowed_result;
}