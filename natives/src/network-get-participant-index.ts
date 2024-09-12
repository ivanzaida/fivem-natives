import { PlayerIndex, ParticipantIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PARTICIPANT_INDEX
 *
 * 0x857CA6FCE5E9C84F

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plr
 * @returns {ParticipantIndex}  
 */
export function networkGetParticipantIndex(plr: PlayerIndex): ParticipantIndex {
	const networkGetParticipantIndex_result = Citizen.invokeNative<ParticipantIndex>('0x857CA6FCE5E9C84F', plr);
	return networkGetParticipantIndex_result;
}