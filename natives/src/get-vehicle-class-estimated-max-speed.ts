import { EVehicleClass } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CLASS_ESTIMATED_MAX_SPEED
 *
 * 0xF5997120A0F53CD2

 * 
 * ------------------------------------------------------------------
 * @param {EVehicleClass} vehicleClass
 * @returns {number}  
 */
export function getVehicleClassEstimatedMaxSpeed(vehicleClass: EVehicleClass | number): number {
	const getVehicleClassEstimatedMaxSpeed_result = Citizen.invokeNative<number>('0xF5997120A0F53CD2', vehicleClass);
	return getVehicleClassEstimatedMaxSpeed_result;
}