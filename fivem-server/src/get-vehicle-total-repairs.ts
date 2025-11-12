import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_TOTAL_REPAIRS
 *
 * 0x9963D5F9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  Returns the total amount of repairs. Each repair will increase the count to make it possible to detect client repairs. 
The value has a range from 0 to 15. Next value after 15 is 0.
 */
export function getVehicleTotalRepairs(vehicle: VehicleIndex): number {
	const getVehicleTotalRepairs_result = Citizen.invokeNative<number>('0x9963D5F9', vehicle);
	return getVehicleTotalRepairs_result;
}