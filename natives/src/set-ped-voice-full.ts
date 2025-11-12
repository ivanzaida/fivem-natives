import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PED_VOICE_FULL
 *
 * 0x7E30BA14928608A0

 * 
 * Assigns some ambient voice to the ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedVoiceFull(ped: PedIndex): void {
	const setPedVoiceFull_result = Citizen.invokeNative<void>('0x7E30BA14928608A0', ped);
	return setPedVoiceFull_result;
}