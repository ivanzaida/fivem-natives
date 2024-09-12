import { NuiCallback } from '@ivanzaida/structures'

/**
 * CFX:REGISTER_NUI_CALLBACK
 *
 * 0xC59B980C

 * 
 * ------------------------------------------------------------------
 * @param {string} callbackType
 * @param {NuiCallback} callback
 */
export function registerNuiCallback(callbackType: string, callback: NuiCallback): void {
	const registerNuiCallback_result = Citizen.invokeNative<void>('0xC59B980C', callbackType, callback);
	return registerNuiCallback_result;
}