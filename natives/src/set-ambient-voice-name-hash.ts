import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_AMBIENT_VOICE_NAME_HASH
 *
 * 0xE0B01E3F4FF01B04

 * 
 * VoiceName specified by Audio
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} voiceNameHash
 */
export function setAmbientVoiceNameHash(ped: PedIndex, voiceNameHash: number): void {
	const setAmbientVoiceNameHash_result = Citizen.invokeNative<void>('0xE0B01E3F4FF01B04', ped, voiceNameHash);
	return setAmbientVoiceNameHash_result;
}