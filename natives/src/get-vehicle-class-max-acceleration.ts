import { EVehicleClass } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CLASS_MAX_ACCELERATION
 *
 * 0x47F48D6E64EE2C11

 * 
 * ------------------------------------------------------------------
 * @param {EVehicleClass} vehicleClass
 * @returns {number}  
 */
export function getVehicleClassMaxAcceleration(vehicleClass: EVehicleClass | number): number {
	const getVehicleClassMaxAcceleration_result = Citizen.invokeNative<number>('0x47F48D6E64EE2C11', vehicleClass);
	return getVehicleClassMaxAcceleration_result;
}