/**
 * MONEY:NETWORK_EARN_COLLECTABLE_COMPLETED_COLLECTION
 *
 * 0xD8D4BFD9BC71E9CC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} collectionHash
 */
export function networkEarnCollectableCompletedCollection(amount: number, collectionHash: number): void {
	const networkEarnCollectableCompletedCollection_result = Citizen.invokeNative<void>('0xD8D4BFD9BC71E9CC', amount, collectionHash);
	return networkEarnCollectableCompletedCollection_result;
}