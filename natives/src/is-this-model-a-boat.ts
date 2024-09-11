import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_BOAT
 *
 * 0xEA4F815FDC353FEF

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelABoat(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelABoat_result = Citizen.invokeNative<boolean>('0xEA4F815FDC353FEF', vehicleModelHashKey);
	return isThisModelABoat_result;
}