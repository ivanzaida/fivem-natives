/**
 * MONEY:NETWORK_SPEND_PLAY_ARCADE
 *
 * 0xE05D60BF50DB8652

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} cabinet
 * @param {number} cabinetAmount
 */
export function networkSpendPlayArcade(amount: number, fromBank: boolean, fromBankAndWallet: boolean, cabinet: number, cabinetAmount: number): void {
	const networkSpendPlayArcade_result = Citizen.invokeNative<void>('0xE05D60BF50DB8652', amount, fromBank, fromBankAndWallet, cabinet, cabinetAmount);
	return networkSpendPlayArcade_result;
}