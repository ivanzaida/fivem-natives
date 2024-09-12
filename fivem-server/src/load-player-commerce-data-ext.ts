/**
 * CFX:LOAD_PLAYER_COMMERCE_DATA_EXT
 *
 * 0X7995539E

 * Requests the commerce data from Tebex for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 */
export function loadPlayerCommerceDataExt(playerSrc: string): void {
	const loadPlayerCommerceDataExt_result = Citizen.invokeNative<void>('0X7995539E', playerSrc);
	return loadPlayerCommerceDataExt_result;
}