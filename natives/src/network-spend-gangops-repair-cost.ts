/**
 * MONEY:NETWORK_SPEND_GANGOPS_REPAIR_COST
 *
 * 0x679A4C47D3A0A4B2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendGangopsRepairCost(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendGangopsRepairCost_result = Citizen.invokeNative<void>('0x679A4C47D3A0A4B2', amount, fromBank, fromBankAndWallet);
	return networkSpendGangopsRepairCost_result;
}