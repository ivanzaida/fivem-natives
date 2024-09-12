import { ParticipantIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_HOST_OF_THIS_SCRIPT
 *
 * 0x48B835569F078653

 * 
 * ------------------------------------------------------------------
 * @returns {ParticipantIndex}  
 */
export function networkGetHostOfThisScript(): ParticipantIndex {
	const networkGetHostOfThisScript_result = Citizen.invokeNative<ParticipantIndex>('0x48B835569F078653', );
	return networkGetHostOfThisScript_result;
}