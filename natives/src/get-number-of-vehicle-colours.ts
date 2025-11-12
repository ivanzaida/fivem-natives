import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_NUMBER_OF_VEHICLE_COLOURS
 *
 * 0x6645B56AACA6C57C

 * 
 * Returns the total amount of color combinations found in the vehicle's carvariations.meta entry.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getNumberOfVehicleColours(vehicle: VehicleIndex): number {
	const getNumberOfVehicleColours_result = Citizen.invokeNative<number>('0x6645B56AACA6C57C', vehicle);
	return getNumberOfVehicleColours_result;
}