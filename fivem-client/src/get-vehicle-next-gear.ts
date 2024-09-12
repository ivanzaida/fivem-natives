import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_NEXT_GEAR
 *
 * 0xDDB298AE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleNextGear(vehicle: VehicleIndex): number {
	const getVehicleNextGear_result = Citizen.invokeNative<number>('0xDDB298AE', vehicle);
	return getVehicleNextGear_result;
}