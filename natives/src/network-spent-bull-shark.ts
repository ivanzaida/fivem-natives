/**
 * MONEY:NETWORK_SPENT_BULL_SHARK
 *
 * 0x510FA24010D2C6E2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentBullShark(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentBullShark_result = Citizen.invokeNative<void>('0x510FA24010D2C6E2', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentBullShark_result;
}