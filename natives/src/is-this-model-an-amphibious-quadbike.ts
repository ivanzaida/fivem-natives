import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_AN_AMPHIBIOUS_QUADBIKE
 *
 * 0x0C43345D94C3E22E

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelAnAmphibiousQuadbike(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelAnAmphibiousQuadbike_result = Citizen.invokeNative<boolean>('0x0C43345D94C3E22E', vehicleModelHashKey);
	return isThisModelAnAmphibiousQuadbike_result;
}