/**
 * MONEY:NETWORK_SPENT_BOSS_GOON
 *
 * 0xEDD28D3FAFE98806

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @returns {boolean}  
 */
export function networkSpentBossGoon(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): boolean {
	const networkSpentBossGoon_result = Citizen.invokeNative<boolean>('0xEDD28D3FAFE98806', amount, fromBank, fromBankAndWallet);
	return networkSpentBossGoon_result;
}