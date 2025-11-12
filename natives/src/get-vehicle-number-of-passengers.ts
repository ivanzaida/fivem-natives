import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_NUMBER_OF_PASSENGERS
 *
 * 0xDE3B10768F6103AD

 * 
 * Gets the number of passengers.
 * 
 * This native was modified in b2545 to take two additional parameters, allowing you to include the driver or exclude dead passengers.
 * 
 * To keep it working like before b2545, set includeDriver to false and includeDeadOccupants to true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} includeDriversSeat
 * @param {boolean} includeDeadPeds
 * @returns {number}  
 */
export function getVehicleNumberOfPassengers(vehicle: VehicleIndex, includeDriversSeat: boolean = false, includeDeadPeds: boolean = true): number {
	const getVehicleNumberOfPassengers_result = Citizen.invokeNative<number>('0xDE3B10768F6103AD', vehicle, includeDriversSeat, includeDeadPeds);
	return getVehicleNumberOfPassengers_result;
}