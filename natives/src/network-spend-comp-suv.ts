/**
 * MONEY:NETWORK_SPEND_COMP_SUV
 *
 * 0x566ADA7FE6D2FFC4

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} providerNpc
 */
export function networkSpendCompSuv(amount: number, fromBank: boolean, fromBankAndWallet: boolean, providerNpc: number): void {
	const networkSpendCompSuv_result = Citizen.invokeNative<void>('0x566ADA7FE6D2FFC4', amount, fromBank, fromBankAndWallet, providerNpc);
	return networkSpendCompSuv_result;
}