/**
 * MONEY:NETWORK_SPEND_SUV_FST_TRVL
 *
 * 0x59DB49C02815273E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} providerNpc
 */
export function networkSpendSuvFstTrvl(amount: number, fromBank: boolean, fromBankAndWallet: boolean, providerNpc: number): void {
	const networkSpendSuvFstTrvl_result = Citizen.invokeNative<void>('0x59DB49C02815273E', amount, fromBank, fromBankAndWallet, providerNpc);
	return networkSpendSuvFstTrvl_result;
}