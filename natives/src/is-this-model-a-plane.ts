import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_THIS_MODEL_A_PLANE
 *
 * 0x00C6FDED3EB75117

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function isThisModelAPlane(vehicleModelHashKey: ModelNames): boolean {
	const isThisModelAPlane_result = Citizen.invokeNative<boolean>('0x00C6FDED3EB75117', vehicleModelHashKey);
	return isThisModelAPlane_result;
}