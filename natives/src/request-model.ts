import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:REQUEST_MODEL
 *
 * 0xEC9DAA34BBB4658C

 * 
 * Request a model to be loaded into memory.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 */
export function requestModel(model: ModelNames): void {
	const requestModel_result = Citizen.invokeNative<void>('0xEC9DAA34BBB4658C', model);
	return requestModel_result;
}