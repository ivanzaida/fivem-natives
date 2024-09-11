import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_FACIAL_IDLE_ANIM
 *
 * 0xCE0A933AAD7CE47D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function resetFacialIdleAnim(ped: PedIndex): void {
	const resetFacialIdleAnim_result = Citizen.invokeNative<void>('0xCE0A933AAD7CE47D', ped);
	return resetFacialIdleAnim_result;
}