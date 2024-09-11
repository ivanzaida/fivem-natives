import { VehicleIndex } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_IMPORT_EXPORT_MISSION_DONE
 *
 * 0x3A6A8B40F4CEF984

 * 
 * ------------------------------------------------------------------
 * @param {number} ambientMissionId
 * @param {number} xpEarned
 * @param {number} cashEarned
 * @param {VehicleIndex} vehicleNetworkID
 */
export function playstatsImportExportMissionDone(ambientMissionId: number, xpEarned: number, cashEarned: number, vehicleNetworkID: VehicleIndex): void {
	const playstatsImportExportMissionDone_result = Citizen.invokeNative<void>('0x3A6A8B40F4CEF984', ambientMissionId, xpEarned, cashEarned, vehicleNetworkID);
	return playstatsImportExportMissionDone_result;
}