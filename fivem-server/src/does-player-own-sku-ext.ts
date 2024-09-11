/**
 * CFX:DOES_PLAYER_OWN_SKU_EXT
 *
 * 0XDEF0480B

 * Requests whether or not the player owns the specified package.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @param {number} skuId The package ID on Tebex.
 * @returns {boolean}  A boolean.
 */
export function doesPlayerOwnSkuExt(playerSrc: string, skuId: number): boolean {
	const doesPlayerOwnSkuExt_result = Citizen.invokeNative<boolean>('0XDEF0480B', playerSrc, skuId);
	return doesPlayerOwnSkuExt_result;
}