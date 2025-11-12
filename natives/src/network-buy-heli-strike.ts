/**
 * MONEY:NETWORK_BUY_HELI_STRIKE
 *
 * 0x2E2FE70D24958511

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
export function networkBuyHeliStrike(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkBuyHeliStrike_result = Citizen.invokeNative<void>('0x2E2FE70D24958511', amount, fromBank, fromBankAndWallet, npcProvider);
	return networkBuyHeliStrike_result;
}