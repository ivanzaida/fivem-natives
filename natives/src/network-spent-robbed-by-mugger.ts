/**
 * MONEY:NETWORK_SPENT_ROBBED_BY_MUGGER
 *
 * 0x47E7DCF167AAD291

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentRobbedByMugger(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentRobbedByMugger_result = Citizen.invokeNative<void>('0x47E7DCF167AAD291', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentRobbedByMugger_result;
}