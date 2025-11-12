/**
 * NETWORK:PARTICIPANT_ID_TO_INT
 *
 * 0xAE032CEDCF23C6D5

 * 
 * Return the local Participant ID.
 * 
 * This native is exactly the same as 'PARTICIPANT_ID' native.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function participantIdToInt(): number {
	const participantIdToInt_result = Citizen.invokeNative<number>('0xAE032CEDCF23C6D5', );
	return participantIdToInt_result;
}