import { ModelNames } from '@ivanzaida/structures'

/**
 * STREAMING:REQUEST_MENU_PED_MODEL
 *
 * 0x99EE60555ADD76D0

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} model
 */
export function requestMenuPedModel(model: ModelNames): void {
	const requestMenuPedModel_result = Citizen.invokeNative<void>('0x99EE60555ADD76D0', model);
	return requestMenuPedModel_result;
}