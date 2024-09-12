/**
 * MONEY:NETWORK_SPENT_VEHICLE_EXPORT_MODS
 *
 * 0x234A1A7A21B287F0

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} bossID1
 * @param {number} bossID2
 * @param {number} buyerID
 * @param {number} vehicle1
 * @param {number} vehicle2
 * @param {number} vehicle3
 * @param {number} vehicle4
 */
export function networkSpentVehicleExportMods(amount: number, fromBank: boolean, fromBankAndWallet: boolean, bossID1: number, bossID2: number, buyerID: number, vehicle1: number, vehicle2: number, vehicle3: number, vehicle4: number): void {
	const networkSpentVehicleExportMods_result = Citizen.invokeNative<void>('0x234A1A7A21B287F0', amount, fromBank, fromBankAndWallet, bossID1, bossID2, buyerID, vehicle1, vehicle2, vehicle3, vehicle4);
	return networkSpentVehicleExportMods_result;
}