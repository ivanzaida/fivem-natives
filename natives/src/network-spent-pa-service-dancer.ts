/**
 * MONEY:NETWORK_SPENT_PA_SERVICE_DANCER
 *
 * 0xEC8A7DFF32FD54B9

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} value
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPaServiceDancer(amount: number, value: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPaServiceDancer_result = Citizen.invokeNative<void>('0xEC8A7DFF32FD54B9', amount, value, fromBank, fromBankAndWallet);
	return networkSpentPaServiceDancer_result;
}