import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_JETSKI
 *
 * 0xA71279EFEE0ACEB2

 * 
 * Checks if model is a boat, then checks for FLAG_IS_JETSKI.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelAJetski(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelAJetski_result = Citizen.invokeNative<boolean>('0xA71279EFEE0ACEB2', vehicleModelHashKey);
	return isThisModelAJetski_result;
}