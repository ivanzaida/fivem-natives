import { ModelNames } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_REMOVE_INVALID_OBJECT_MODEL
 *
 * 0x0127914A94E51F42

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHashKey
 */
export function networkRemoveInvalidObjectModel(modelHashKey: ModelNames): void {
	const networkRemoveInvalidObjectModel_result = Citizen.invokeNative<void>('0x0127914A94E51F42', modelHashKey);
	return networkRemoveInvalidObjectModel_result;
}