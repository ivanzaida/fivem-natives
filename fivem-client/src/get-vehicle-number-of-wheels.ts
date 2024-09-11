import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_NUMBER_OF_WHEELS
 *
 * 0XEDF4B0FC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleNumberOfWheels(vehicle: VehicleIndex): number {
	const getVehicleNumberOfWheels_result = Citizen.invokeNative<number>('0XEDF4B0FC', vehicle);
	return getVehicleNumberOfWheels_result;
}