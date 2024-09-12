import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:RELEASE_PRELOAD_MODS
 *
 * 0xFB54FC989415871E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function releasePreloadMods(vehicle: VehicleIndex): void {
	const releasePreloadMods_result = Citizen.invokeNative<void>('0xFB54FC989415871E', vehicle);
	return releasePreloadMods_result;
}