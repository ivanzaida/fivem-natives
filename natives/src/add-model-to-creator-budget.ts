import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:ADD_MODEL_TO_CREATOR_BUDGET
 *
 * 0xFF795413579DFDC5

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHash
 * @returns {boolean}  
 */
export function addModelToCreatorBudget(modelHash: ModelNames): boolean {
	const addModelToCreatorBudget_result = Citizen.invokeNative<boolean>('0xFF795413579DFDC5', modelHash);
	return addModelToCreatorBudget_result;
}