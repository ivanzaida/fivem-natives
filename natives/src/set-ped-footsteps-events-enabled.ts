import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PED_FOOTSTEPS_EVENTS_ENABLED
 *
 * 0xD3709D521B87D7B8

 * 
 * Enables/disables ped's "loud" footstep sound.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enabed
 */
export function setPedFootstepsEventsEnabled(ped: PedIndex, enabed: boolean): void {
	const setPedFootstepsEventsEnabled_result = Citizen.invokeNative<void>('0xD3709D521B87D7B8', ped, enabed);
	return setPedFootstepsEventsEnabled_result;
}