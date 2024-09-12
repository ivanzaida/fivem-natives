import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_BIKE
 *
 * 0x78B050AFBA6D1517

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelABike(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelABike_result = Citizen.invokeNative<boolean>('0x78B050AFBA6D1517', vehicleModelHashKey);
	return isThisModelABike_result;
}