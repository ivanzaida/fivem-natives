import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_HELI
 *
 * 0xBA16CD57E37AC32A

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelAHeli(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelAHeli_result = Citizen.invokeNative<boolean>('0xBA16CD57E37AC32A', vehicleModelHashKey);
	return isThisModelAHeli_result;
}