/**
 * MONEY:NETWORK_SPEND_MAKE_IT_RAIN
 *
 * 0xF5BEEB8BA669C558

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendMakeItRain(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendMakeItRain_result = Citizen.invokeNative<void>('0xF5BEEB8BA669C558', amount, fromBank, fromBankAndWallet);
	return networkSpendMakeItRain_result;
}