/**
 * MONEY:NETWORK_SPEND_HIDDEN
 *
 * 0x29F36537BAC3D711

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} providerNpc
 */
export function networkSpendHidden(amount: number, fromBank: boolean, fromBankAndWallet: boolean, providerNpc: number): void {
	const networkSpendHidden_result = Citizen.invokeNative<void>('0x29F36537BAC3D711', amount, fromBank, fromBankAndWallet, providerNpc);
	return networkSpendHidden_result;
}