import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:GET_AMBIENT_VOICE_NAME_HASH
 *
 * 0xD93B65D497A805BA

 * 
 * Gets the hash of the voice name in use by Audio
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getAmbientVoiceNameHash(ped: PedIndex): number {
	const getAmbientVoiceNameHash_result = Citizen.invokeNative<number>('0xD93B65D497A805BA', ped);
	return getAmbientVoiceNameHash_result;
}