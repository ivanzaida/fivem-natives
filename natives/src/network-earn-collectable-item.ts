/**
 * MONEY:NETWORK_EARN_COLLECTABLE_ITEM
 *
 * 0x2B8A3862BDE6737C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} collectionHash
 */
export function networkEarnCollectableItem(amount: number, collectionHash: number): void {
	const networkEarnCollectableItem_result = Citizen.invokeNative<void>('0x2B8A3862BDE6737C', amount, collectionHash);
	return networkEarnCollectableItem_result;
}