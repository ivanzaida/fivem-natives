import { WarehouseMissionEnded } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_WAREHOUSE_MISSION_ENDED
 *
 * 0x3CC95BC25EF390A3

 * 
 * ------------------------------------------------------------------
 * @param {WarehouseMissionEnded} data [Ref]
 */
export function playstatsWarehouseMissionEnded(data: WarehouseMissionEnded /* ptr */): void {
	const playstatsWarehouseMissionEnded_result = Citizen.invokeNative<void>('0x3CC95BC25EF390A3', data.dataView);
	return playstatsWarehouseMissionEnded_result;
}