/**
 * CFX:REQUEST_PLAYER_COMMERCE_SESSION
 *
 * 0X96F93CCE

 * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptancewill open the browser prompting further purchase details.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player handle
 * @param {number} skuId The ID of the SKU.
 */
export function requestPlayerCommerceSession(playerSrc: string, skuId: number): void {
	const requestPlayerCommerceSession_result = Citizen.invokeNative<void>('0X96F93CCE', playerSrc, skuId);
	return requestPlayerCommerceSession_result;
}