/**
 * MONEY:NETWORK_SPEND_CASINO_MEMBERSHIP
 *
 * 0x3F00B9CADEE8EB3D

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} purchasePoint
 */
export function networkSpendCasinoMembership(amount: number, fromBank: boolean, fromBankAndWallet: boolean, purchasePoint: number): void {
	const networkSpendCasinoMembership_result = Citizen.invokeNative<void>('0x3F00B9CADEE8EB3D', amount, fromBank, fromBankAndWallet, purchasePoint);
	return networkSpendCasinoMembership_result;
}