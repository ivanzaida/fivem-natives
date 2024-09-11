/**
 * MONEY:NETWORK_SPENT_AMMO_DROP
 *
 * 0xEE1CE55E7DF07D50

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentAmmoDrop(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentAmmoDrop_result = Citizen.invokeNative<void>('0xEE1CE55E7DF07D50', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentAmmoDrop_result;
}