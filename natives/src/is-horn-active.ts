import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_HORN_ACTIVE
 *
 * 0x1A90E9DC88A85C9D

 * 
 * Checks whether the horn of a vehicle is currently played.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @returns {boolean}  
 */
export function isHornActive(veh: VehicleIndex): boolean {
	const isHornActive_result = Citizen.invokeNative<boolean>('0x1A90E9DC88A85C9D', veh);
	return isHornActive_result;
}