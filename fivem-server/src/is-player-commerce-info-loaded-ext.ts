/**
 * CFX:IS_PLAYER_COMMERCE_INFO_LOADED_EXT
 *
 * 0X1D14F4FE

 * Requests whether or not the commerce data for the specified player has loaded from Tebex.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @returns {boolean}  A boolean.
 */
export function isPlayerCommerceInfoLoadedExt(playerSrc: string): boolean {
	const isPlayerCommerceInfoLoadedExt_result = Citizen.invokeNative<boolean>('0X1D14F4FE', playerSrc);
	return isPlayerCommerceInfoLoadedExt_result;
}