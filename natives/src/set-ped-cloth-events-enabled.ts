import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PED_CLOTH_EVENTS_ENABLED
 *
 * 0x0AD4EECE226A86F5

 * 
 * Enables/disables ped's "quiet" footstep sound.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enabed
 */
export function setPedClothEventsEnabled(ped: PedIndex, enabed: boolean): void {
	const setPedClothEventsEnabled_result = Citizen.invokeNative<void>('0x0AD4EECE226A86F5', ped, enabed);
	return setPedClothEventsEnabled_result;
}