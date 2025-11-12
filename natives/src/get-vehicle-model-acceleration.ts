import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MODEL_ACCELERATION
 *
 * 0x1C6BE134527C543C

 * 
 * Returns the acceleration of the specified model.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getVehicleModelAcceleration(vehicleModelHashKey: ModelNames): number {
	const getVehicleModelAcceleration_result = Citizen.invokeNative<number>('0x1C6BE134527C543C', vehicleModelHashKey);
	return getVehicleModelAcceleration_result;
}