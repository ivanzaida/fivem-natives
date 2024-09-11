import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_FACIAL_IDLE_ANIM_OVERRIDE
 *
 * 0x490EA3A0CF334F58

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearFacialIdleAnimOverride(ped: PedIndex): void {
	const clearFacialIdleAnimOverride_result = Citizen.invokeNative<void>('0x490EA3A0CF334F58', ped);
	return clearFacialIdleAnimOverride_result;
}