import { ParticipantIndex } from '@ivanzaida/structures'

/**
 * NETWORK:PARTICIPANT_ID
 *
 * 0x30DE412C1194FCDD

 * 
 * Return the local Participant ID
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ParticipantIndex}  
 */
export function participantId(): ParticipantIndex {
	const participantId_result = Citizen.invokeNative<ParticipantIndex>('0x30DE412C1194FCDD', );
	return participantId_result;
}