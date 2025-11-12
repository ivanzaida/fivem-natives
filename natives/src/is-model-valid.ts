import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:IS_MODEL_VALID
 *
 * 0x441B9C85D0FFA9ED

 * 
 * Returns whether the specified model exists in the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHash
 * @returns {boolean}  
 */
export function isModelValid(modelHash: ModelNames): boolean {
	const isModelValid_result = Citizen.invokeNative<boolean>('0x441B9C85D0FFA9ED', modelHash);
	return isModelValid_result;
}