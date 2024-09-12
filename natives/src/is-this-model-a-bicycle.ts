import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_BICYCLE
 *
 * 0x3801E353091A2E42

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelABicycle(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelABicycle_result = Citizen.invokeNative<boolean>('0x3801E353091A2E42', vehicleModelHashKey);
	return isThisModelABicycle_result;
}