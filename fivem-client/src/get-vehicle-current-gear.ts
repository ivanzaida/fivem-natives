import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_CURRENT_GEAR
 *
 * 0XB4F4E566

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleCurrentGear(vehicle: VehicleIndex): number {
	const getVehicleCurrentGear_result = Citizen.invokeNative<number>('0XB4F4E566', vehicle);
	return getVehicleCurrentGear_result;
}