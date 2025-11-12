import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_AMBIENT_SPEECH_DISABLED
 *
 * 0xE8B33D130955481B

 * 
 * Common in the scripts:
 * AUDIO::IS_AMBIENT_SPEECH_DISABLED(PLAYER::PLAYER_PED_ID());
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isAmbientSpeechDisabled(ped: PedIndex): boolean {
	const isAmbientSpeechDisabled_result = Citizen.invokeNative<boolean>('0xE8B33D130955481B', ped);
	return isAmbientSpeechDisabled_result;
}