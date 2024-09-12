/**
 * MONEY:NETWORK_SPEND_NIGHTCLUB_AND_WAREHOUSE
 *
 * 0x635D6A4C16C8B427

 * 
 * ------------------------------------------------------------------
 * @param {number} attendant
 * @param {number} entryFee
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendNightclubAndWarehouse(attendant: number, entryFee: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendNightclubAndWarehouse_result = Citizen.invokeNative<void>('0x635D6A4C16C8B427', attendant, entryFee, fromBank, fromBankAndWallet);
	return networkSpendNightclubAndWarehouse_result;
}