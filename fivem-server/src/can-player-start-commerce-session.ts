/**
 * CFX:CAN_PLAYER_START_COMMERCE_SESSION
 *
 * 0X429461C3

 * Returns whether or not the specified player has enough information to start a commerce session for.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {boolean}  True or false.
 */
export function canPlayerStartCommerceSession(playerSrc: string): boolean {
	const canPlayerStartCommerceSession_result = Citizen.invokeNative<boolean>('0X429461C3', playerSrc);
	return canPlayerStartCommerceSession_result;
}