import { EVehicleClass } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CLASS_MAX_BRAKING
 *
 * 0x16C1ECD6E377277D

 * 
 * ------------------------------------------------------------------
 * @param {EVehicleClass} vehicleClass
 * @returns {number}  
 */
export function getVehicleClassMaxBraking(vehicleClass: EVehicleClass | number): number {
	const getVehicleClassMaxBraking_result = Citizen.invokeNative<number>('0x16C1ECD6E377277D', vehicleClass);
	return getVehicleClassMaxBraking_result;
}