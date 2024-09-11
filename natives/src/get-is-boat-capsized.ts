import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_BOAT_CAPSIZED
 *
 * 0x656463C707D8CCC9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsBoatCapsized(vehicle: VehicleIndex): boolean {
	const getIsBoatCapsized_result = Citizen.invokeNative<boolean>('0x656463C707D8CCC9', vehicle);
	return getIsBoatCapsized_result;
}