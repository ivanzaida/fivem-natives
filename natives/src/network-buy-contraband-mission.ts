/**
 * MONEY:NETWORK_BUY_CONTRABAND_MISSION
 *
 * 0xCD042AEDCC67E05D

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} warehouseID
 * @param {number} missionID
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkBuyContrabandMission(amount: number, warehouseID: number, missionID: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkBuyContrabandMission_result = Citizen.invokeNative<void>('0xCD042AEDCC67E05D', amount, warehouseID, missionID, fromBank, fromBankAndWallet);
	return networkBuyContrabandMission_result;
}