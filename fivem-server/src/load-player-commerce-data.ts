/**
 * CFX:LOAD_PLAYER_COMMERCE_DATA
 *
 * 0XA8F63EAB

 * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 */
export function loadPlayerCommerceData(playerSrc: string): void {
	const loadPlayerCommerceData_result = Citizen.invokeNative<void>('0XA8F63EAB', playerSrc);
	return loadPlayerCommerceData_result;
}