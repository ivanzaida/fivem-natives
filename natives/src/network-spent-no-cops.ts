/**
 * MONEY:NETWORK_SPENT_NO_COPS
 *
 * 0x5457AC60E3138BFF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentNoCops(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentNoCops_result = Citizen.invokeNative<void>('0x5457AC60E3138BFF', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentNoCops_result;
}