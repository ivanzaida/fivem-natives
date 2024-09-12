/**
 * MONEY:NETWORK_SPENT_BOAT_PICKUP
 *
 * 0x0B191D6DA6D08B82

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentBoatPickup(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentBoatPickup_result = Citizen.invokeNative<void>('0x0B191D6DA6D08B82', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentBoatPickup_result;
}