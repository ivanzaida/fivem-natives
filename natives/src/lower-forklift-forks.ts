import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:LOWER_FORKLIFT_FORKS
 *
 * 0x306E268B106D3D0D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} forklift
 */
export function lowerForkliftForks(forklift: VehicleIndex): void {
	const lowerForkliftForks_result = Citizen.invokeNative<void>('0x306E268B106D3D0D', forklift);
	return lowerForkliftForks_result;
}