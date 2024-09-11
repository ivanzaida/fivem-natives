/**
 * MONEY:NETWORK_SPENT_BALLISTIC_EQUIPMENT
 *
 * 0x5D9F9E16048EFF63

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentBallisticEquipment(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentBallisticEquipment_result = Citizen.invokeNative<void>('0x5D9F9E16048EFF63', amount, fromBank, fromBankAndWallet);
	return networkSpentBallisticEquipment_result;
}