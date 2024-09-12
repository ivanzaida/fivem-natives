import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:ENABLE_MP_LIGHT
 *
 * 0x6164A393993354D7

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 */
export function enableMpLight(ped: PedIndex, enable: boolean): void {
	const enableMpLight_result = Citizen.invokeNative<void>('0x6164A393993354D7', ped, enable);
	return enableMpLight_result;
}