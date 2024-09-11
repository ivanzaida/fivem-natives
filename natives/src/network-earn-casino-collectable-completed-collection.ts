/**
 * MONEY:NETWORK_EARN_CASINO_COLLECTABLE_COMPLETED_COLLECTION
 *
 * 0x22F6103D7DF1811B

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnCasinoCollectableCompletedCollection(amount: number): void {
	const networkEarnCasinoCollectableCompletedCollection_result = Citizen.invokeNative<void>('0x22F6103D7DF1811B', amount);
	return networkEarnCasinoCollectableCompletedCollection_result;
}