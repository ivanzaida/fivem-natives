import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:HAS_COLLISION_FOR_MODEL_LOADED
 *
 * 0xB1625FCB7B6A7982

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 * @returns {boolean}  
 */
export function hasCollisionForModelLoaded(model: ModelNames): boolean {
	const hasCollisionForModelLoaded_result = Citizen.invokeNative<boolean>('0xB1625FCB7B6A7982', model);
	return hasCollisionForModelLoaded_result;
}