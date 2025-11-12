import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:IS_MODEL_A_VEHICLE
 *
 * 0xAD1840C2E6AF7D5E

 * 
 * Returns whether the specified model represents a vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHashKey
 * @returns {boolean}  
 */
export function isModelAVehicle(modelHashKey: ModelNames): boolean {
	const isModelAVehicle_result = Citizen.invokeNative<boolean>('0xAD1840C2E6AF7D5E', modelHashKey);
	return isModelAVehicle_result;
}