import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:HAS_MODEL_LOADED
 *
 * 0x6252BC0DD8A320DB

 * 
 * Checks if the specified model has loaded into memory.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 * @returns {boolean}  
 */
export function hasModelLoaded(model: ModelNames): boolean {
	const hasModelLoaded_result = Citizen.invokeNative<boolean>('0x6252BC0DD8A320DB', model);
	return hasModelLoaded_result;
}