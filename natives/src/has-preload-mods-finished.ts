import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:HAS_PRELOAD_MODS_FINISHED
 *
 * 0x3AACF4E05C1E40E0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function hasPreloadModsFinished(vehicle: VehicleIndex): boolean {
	const hasPreloadModsFinished_result = Citizen.invokeNative<boolean>('0x3AACF4E05C1E40E0', vehicle);
	return hasPreloadModsFinished_result;
}