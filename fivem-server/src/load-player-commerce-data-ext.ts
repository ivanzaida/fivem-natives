/**
 * CFX:LOAD_PLAYER_COMMERCE_DATA_EXT
 *
 * 0x7995539E

 * Requests the commerce data from Tebex for the specified player, including the owned SKUs.Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#_0x1D14F4FE) to check if it has loaded.This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 */
export function loadPlayerCommerceDataExt(playerSrc: string): void {
	const loadPlayerCommerceDataExt_result = Citizen.invokeNative<void>('0x7995539E', playerSrc);
	return loadPlayerCommerceDataExt_result;
}