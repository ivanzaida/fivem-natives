import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:IS_MODEL_A_PED
 *
 * 0xBA4223DE7F0708BA

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHashKey
 * @returns {boolean}  
 */
export function isModelAPed(modelHashKey: ModelNames): boolean {
	const isModelAPed_result = Citizen.invokeNative<boolean>('0xBA4223DE7F0708BA', modelHashKey);
	return isModelAPed_result;
}