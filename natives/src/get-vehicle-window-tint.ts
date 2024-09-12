import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_WINDOW_TINT
 *
 * 0xDA63CE76F9AAB439

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleWindowTint(vehicle: VehicleIndex): number {
	const getVehicleWindowTint_result = Citizen.invokeNative<number>('0xDA63CE76F9AAB439', vehicle);
	return getVehicleWindowTint_result;
}