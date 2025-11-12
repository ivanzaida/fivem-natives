import { ParticipantIndex } from '@ivanzaida/structures'

/**
 * PLAYER:INT_TO_PARTICIPANTINDEX
 *
 * 0xF0C9E5565CB32F4B

 * 
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * --------------------------------------------------------
 * if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::INT_TO_PARTICIPANTINDEX(i)))
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} arg
 * @returns {ParticipantIndex}  
 */
export function intToParticipantindex(arg: number): ParticipantIndex {
	const intToParticipantindex_result = Citizen.invokeNative<ParticipantIndex>('0xF0C9E5565CB32F4B', arg);
	return intToParticipantindex_result;
}