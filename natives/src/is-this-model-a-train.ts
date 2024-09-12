import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_TRAIN
 *
 * 0xAE447CBB33B40CA3

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelATrain(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelATrain_result = Citizen.invokeNative<boolean>('0xAE447CBB33B40CA3', vehicleModelHashKey);
	return isThisModelATrain_result;
}