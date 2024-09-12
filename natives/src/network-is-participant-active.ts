import { ParticipantIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PARTICIPANT_ACTIVE
 *
 * 0x7206AEB20960CCC8

 * 
 * ------------------------------------------------------------------
 * @param {ParticipantIndex} participant
 * @returns {boolean}  
 */
export function networkIsParticipantActive(participant: ParticipantIndex): boolean {
	const networkIsParticipantActive_result = Citizen.invokeNative<boolean>('0x7206AEB20960CCC8', participant);
	return networkIsParticipantActive_result;
}