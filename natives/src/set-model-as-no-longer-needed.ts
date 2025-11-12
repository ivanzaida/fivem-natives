import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:SET_MODEL_AS_NO_LONGER_NEEDED
 *
 * 0x55098D9E9AD58806

 * 
 * Unloads model from memory
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 */
export function setModelAsNoLongerNeeded(model: ModelNames): void {
	const setModelAsNoLongerNeeded_result = Citizen.invokeNative<void>('0x55098D9E9AD58806', model);
	return setModelAsNoLongerNeeded_result;
}