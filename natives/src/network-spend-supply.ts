/**
 * MONEY:NETWORK_SPEND_SUPPLY
 *
 * 0x2F5233FB30DF57D5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} providerNpc
 */
export function networkSpendSupply(amount: number, fromBank: boolean, fromBankAndWallet: boolean, providerNpc: number): void {
	const networkSpendSupply_result = Citizen.invokeNative<void>('0x2F5233FB30DF57D5', amount, fromBank, fromBankAndWallet, providerNpc);
	return networkSpendSupply_result;
}