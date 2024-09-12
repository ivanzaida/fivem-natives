import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WINDOW_TINT
 *
 * 0X13D53892

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleWindowTint(vehicle: VehicleIndex): number {
	const getVehicleWindowTint_result = Citizen.invokeNative<number>('0X13D53892', vehicle);
	return getVehicleWindowTint_result;
}