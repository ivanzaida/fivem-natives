import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_CAR
 *
 * 0xD3CE8D1E6564B011

 * 
 * To check if the model is an amphibious car, use IS_THIS_MODEL_AN_AMPHIBIOUS_CAR.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelACar(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelACar_result = Citizen.invokeNative<boolean>('0xD3CE8D1E6564B011', vehicleModelHashKey);
	return isThisModelACar_result;
}