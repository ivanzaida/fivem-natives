/**
 * MONEY:NETWORK_BUY_PROPERTY
 *
 * 0xA0BB8B5F3BF0B873

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} propertyType
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkBuyProperty(amount: number, propertyType: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkBuyProperty_result = Citizen.invokeNative<void>('0xA0BB8B5F3BF0B873', amount, propertyType, fromBank, fromBankAndWallet);
	return networkBuyProperty_result;
}