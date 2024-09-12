/**
 * MONEY:NETWORK_SPENT_WAGER
 *
 * 0x6409DA98EAB29EF9

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} amount
 */
export function networkSpentWager(bossId1: number, bossId2: number, amount: number): void {
	const networkSpentWager_result = Citizen.invokeNative<void>('0x6409DA98EAB29EF9', bossId1, bossId2, amount);
	return networkSpentWager_result;
}