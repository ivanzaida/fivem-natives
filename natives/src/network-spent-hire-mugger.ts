/**
 * MONEY:NETWORK_SPENT_HIRE_MUGGER
 *
 * 0x028DAC40D73AD61C

 * 
 * Only used once in a script (am_contact_requests)
 * p1 = 0
 * p2 = 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkSpentHireMugger(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkSpentHireMugger_result = Citizen.invokeNative<void>('0x028DAC40D73AD61C', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkSpentHireMugger_result;
}