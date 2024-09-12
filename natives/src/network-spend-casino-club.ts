/**
 * MONEY:NETWORK_SPEND_CASINO_CLUB
 *
 * 0x7295CAE6372986E4

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} barItem
 * @param {number} barAmount
 * @param {number} vipItem
 * @param {number} vipAmount
 * @param {number} entryAmount
 * @param {number} attendantAmount
 */
export function networkSpendCasinoClub(amount: number, fromBank: boolean, fromBankAndWallet: boolean, barItem: number, barAmount: number, vipItem: number, vipAmount: number, entryAmount: number, attendantAmount: number): void {
	const networkSpendCasinoClub_result = Citizen.invokeNative<void>('0x7295CAE6372986E4', amount, fromBank, fromBankAndWallet, barItem, barAmount, vipItem, vipAmount, entryAmount, attendantAmount);
	return networkSpendCasinoClub_result;
}