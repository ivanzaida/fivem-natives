import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:TRIGGER_IDLE_ANIMATION_ON_PED
 *
 * 0xC4BFA8F80937118D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function triggerIdleAnimationOnPed(ped: PedIndex): void {
	const triggerIdleAnimationOnPed_result = Citizen.invokeNative<void>('0xC4BFA8F80937118D', ped);
	return triggerIdleAnimationOnPed_result;
}