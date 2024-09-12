import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:REMOVE_MODEL_FROM_CREATOR_BUDGET
 *
 * 0x030B10A00315BA0C

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHash
 */
export function removeModelFromCreatorBudget(modelHash: ModelNames): void {
	const removeModelFromCreatorBudget_result = Citizen.invokeNative<void>('0x030B10A00315BA0C', modelHash);
	return removeModelFromCreatorBudget_result;
}