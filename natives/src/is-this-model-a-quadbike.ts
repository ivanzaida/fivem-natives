import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_QUADBIKE
 *
 * 0x9910CD0D8626AA28

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelAQuadbike(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelAQuadbike_result = Citizen.invokeNative<boolean>('0x9910CD0D8626AA28', vehicleModelHashKey);
	return isThisModelAQuadbike_result;
}