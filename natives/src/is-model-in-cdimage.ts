import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:IS_MODEL_IN_CDIMAGE
 *
 * 0xE7D342E0F16AAA8F

 * 
 * Check if model is in cdimage(rpf)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 * @returns {boolean}  
 */
export function isModelInCdimage(model: ModelNames): boolean {
	const isModelInCdimage_result = Citizen.invokeNative<boolean>('0xE7D342E0F16AAA8F', model);
	return isModelInCdimage_result;
}