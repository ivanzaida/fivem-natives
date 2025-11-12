/**
 * MONEY:NETWORK_BUY_AIRSTRIKE
 *
 * 0xE712829A13AA007C

 * 
 * p1 = 0 (always)
 * p2 = 1 (always)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkBuyAirstrike(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkBuyAirstrike_result = Citizen.invokeNative<void>('0xE712829A13AA007C', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkBuyAirstrike_result;
}