/**
 * MONEY:NETWORK_SPENT_HELI_PICKUP
 *
 * 0x5281982126ED6EB1

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentHeliPickup(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentHeliPickup_result = Citizen.invokeNative<void>('0x5281982126ED6EB1', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentHeliPickup_result;
}