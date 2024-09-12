import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HIGH_GEAR
 *
 * 0xF1D1D689

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleHighGear(vehicle: VehicleIndex): number {
	const getVehicleHighGear_result = Citizen.invokeNative<number>('0xF1D1D689', vehicle);
	return getVehicleHighGear_result;
}