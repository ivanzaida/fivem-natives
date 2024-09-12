/**
 * MONEY:NETWORK_BUY_SMOKES
 *
 * 0x3394F4E239C12E5B

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkBuySmokes(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkBuySmokes_result = Citizen.invokeNative<void>('0x3394F4E239C12E5B', amount, fromBank, fromBankAndWallet);
	return networkBuySmokes_result;
}