/**
 * MONEY:NETWORK_SPENT_BUY_OFFTHERADAR
 *
 * 0x390F7605EEFF27DD

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentBuyOfftheradar(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentBuyOfftheradar_result = Citizen.invokeNative<void>('0x390F7605EEFF27DD', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentBuyOfftheradar_result;
}