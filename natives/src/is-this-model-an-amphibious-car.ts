import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_AN_AMPHIBIOUS_CAR
 *
 * 0xD9BDDEAC04BC910C

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelAnAmphibiousCar(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelAnAmphibiousCar_result = Citizen.invokeNative<boolean>('0xD9BDDEAC04BC910C', vehicleModelHashKey);
	return isThisModelAnAmphibiousCar_result;
}