/**
 * CFX:DOES_PLAYER_OWN_SKU
 *
 * 0X167ABA27

 * Requests whether or not the player owns the specified SKU.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @param {number} skuId The ID of the SKU.
 * @returns {boolean}  A boolean.
 */
export function doesPlayerOwnSku(playerSrc: string, skuId: number): boolean {
	const doesPlayerOwnSku_result = Citizen.invokeNative<boolean>('0X167ABA27', playerSrc, skuId);
	return doesPlayerOwnSku_result;
}