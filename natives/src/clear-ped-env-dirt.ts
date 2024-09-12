import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_ENV_DIRT
 *
 * 0xD81F5EA29FD2682E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedEnvDirt(ped: PedIndex): void {
	const clearPedEnvDirt_result = Citizen.invokeNative<void>('0xD81F5EA29FD2682E', ped);
	return clearPedEnvDirt_result;
}