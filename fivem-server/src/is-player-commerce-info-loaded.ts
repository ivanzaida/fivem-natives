/**
 * CFX:IS_PLAYER_COMMERCE_INFO_LOADED
 *
 * 0XBEFE93F4

 * Requests whether or not the commerce data for the specified player has loaded.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {boolean}  A boolean.
 */
export function isPlayerCommerceInfoLoaded(playerSrc: string): boolean {
	const isPlayerCommerceInfoLoaded_result = Citizen.invokeNative<boolean>('0XBEFE93F4', playerSrc);
	return isPlayerCommerceInfoLoaded_result;
}