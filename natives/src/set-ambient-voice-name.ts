import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_AMBIENT_VOICE_NAME
 *
 * 0x397CF4F4C8B17365

 * 
 * VoiceName specified by Audio
 * 
 * Audio List
 * gtaforums.com/topic/795622-audio-for-mods/
 * 
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/FTeAj4yZ
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} voiceName
 */
export function setAmbientVoiceName(ped: PedIndex, voiceName: string): void {
	const setAmbientVoiceName_result = Citizen.invokeNative<void>('0x397CF4F4C8B17365', ped, voiceName);
	return setAmbientVoiceName_result;
}