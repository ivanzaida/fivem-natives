import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_NEXT_GEAR
 *
 * 0XDDB298AE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleNextGear(vehicle: VehicleIndex): number {
	const getVehicleNextGear_result = Citizen.invokeNative<number>('0XDDB298AE', vehicle);
	return getVehicleNextGear_result;
}