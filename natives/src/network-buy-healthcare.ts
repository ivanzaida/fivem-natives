/**
 * MONEY:NETWORK_BUY_HEALTHCARE
 *
 * 0x872D579FE9A001C0

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkBuyHealthcare(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkBuyHealthcare_result = Citizen.invokeNative<void>('0x872D579FE9A001C0', amount, fromBank, fromBankAndWallet);
	return networkBuyHealthcare_result;
}