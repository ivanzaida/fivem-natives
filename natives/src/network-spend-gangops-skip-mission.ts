/**
 * MONEY:NETWORK_SPEND_GANGOPS_SKIP_MISSION
 *
 * 0xDE737A0063E49970

 * 
 * ------------------------------------------------------------------
 * @param {number} mission
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendGangopsSkipMission(mission: number, amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendGangopsSkipMission_result = Citizen.invokeNative<void>('0xDE737A0063E49970', mission, amount, fromBank, fromBankAndWallet);
	return networkSpendGangopsSkipMission_result;
}