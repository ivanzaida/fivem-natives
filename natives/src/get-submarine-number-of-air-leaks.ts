import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_SUBMARINE_NUMBER_OF_AIR_LEAKS
 *
 * 0x2D7690E0BF110B40

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getSubmarineNumberOfAirLeaks(vehicle: VehicleIndex): number {
	const getSubmarineNumberOfAirLeaks_result = Citizen.invokeNative<number>('0x2D7690E0BF110B40', vehicle);
	return getSubmarineNumberOfAirLeaks_result;
}