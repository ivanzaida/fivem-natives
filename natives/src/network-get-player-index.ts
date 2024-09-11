import { ParticipantIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PLAYER_INDEX
 *
 * 0x4470BE79F5771783

 * 
 * ------------------------------------------------------------------
 * @param {ParticipantIndex} participant
 * @returns {PlayerIndex}  
 */
export function networkGetPlayerIndex(participant: ParticipantIndex): PlayerIndex {
	const networkGetPlayerIndex_result = Citizen.invokeNative<PlayerIndex>('0x4470BE79F5771783', participant);
	return networkGetPlayerIndex_result;
}