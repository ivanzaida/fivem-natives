import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS
 *
 * 0x2EEC0612337D20CE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleMaxNumberOfPassengers(vehicle: VehicleIndex): number {
	const getVehicleMaxNumberOfPassengers_result = Citizen.invokeNative<number>('0x2EEC0612337D20CE', vehicle);
	return getVehicleMaxNumberOfPassengers_result;
}