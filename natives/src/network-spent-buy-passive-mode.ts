/**
 * MONEY:NETWORK_SPENT_BUY_PASSIVE_MODE
 *
 * 0x3DFB797B5A3B9923

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentBuyPassiveMode(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentBuyPassiveMode_result = Citizen.invokeNative<void>('0x3DFB797B5A3B9923', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentBuyPassiveMode_result;
}