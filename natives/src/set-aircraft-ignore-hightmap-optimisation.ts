import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_AIRCRAFT_IGNORE_HIGHTMAP_OPTIMISATION
 *
 * 0xDA9A20F41B1D3C1B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} ignoreHeightMap
 */
export function setAircraftIgnoreHightmapOptimisation(vehicle: VehicleIndex, ignoreHeightMap: boolean): void {
	const setAircraftIgnoreHightmapOptimisation_result = Citizen.invokeNative<void>('0xDA9A20F41B1D3C1B', vehicle, ignoreHeightMap);
	return setAircraftIgnoreHightmapOptimisation_result;
}