import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_PED_AMBIENT_SPEECH_NATIVE
 *
 * 0x04C016145CE6A18B

 * 
 * Plays ambient speech. See also _0x444180DB.
 * 
 * ped: The ped to play the ambient speech.
 * speechName: Name of the speech to play, eg. "GENERIC_HI".
 * speechParam: Can be one of the following:
 * SPEECH_PARAMS_STANDARD
 * SPEECH_PARAMS_ALLOW_REPEAT
 * SPEECH_PARAMS_BEAT
 * SPEECH_PARAMS_FORCE
 * SPEECH_PARAMS_FORCE_FRONTEND
 * SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND
 * SPEECH_PARAMS_FORCE_NORMAL
 * SPEECH_PARAMS_FORCE_NORMAL_CLEAR
 * SPEECH_PARAMS_FORCE_NORMAL_CRITICAL
 * SPEECH_PARAMS_FORCE_SHOUTED
 * SPEECH_PARAMS_FORCE_SHOUTED_CLEAR
 * SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY
 * SPEECH_PARAMS_MEGAPHONE
 * SPEECH_PARAMS_HELI
 * SPEECH_PARAMS_FORCE_MEGAPHONE
 * SPEECH_PARAMS_FORCE_HELI
 * SPEECH_PARAMS_INTERRUPT
 * SPEECH_PARAMS_INTERRUPT_SHOUTED
 * SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR
 * SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL
 * SPEECH_PARAMS_INTERRUPT_NO_FORCE
 * SPEECH_PARAMS_INTERRUPT_FRONTEND
 * SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND
 * SPEECH_PARAMS_ADD_BLIP
 * SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT
 * SPEECH_PARAMS_ADD_BLIP_FORCE
 * SPEECH_PARAMS_ADD_BLIP_SHOUTED
 * SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE
 * SPEECH_PARAMS_ADD_BLIP_INTERRUPT
 * SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL
 * SPEECH_PARAMS_SHOUTED
 * SPEECH_PARAMS_SHOUTED_CLEAR
 * SPEECH_PARAMS_SHOUTED_CRITICAL
 * 
 * Note: A list of Name and Parameters can be found here https://pastebin.com/1GZS5dCL
 * 
 * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} context
 * @param {string} params
 * @param {boolean} syncOverNetwork Indicates whether this speech should automatically by played on clones of the ped on remote machines
 */
export function playPedAmbientSpeechNative(ped: PedIndex, context: string, params: string, syncOverNetwork: boolean = true): void {
	const playPedAmbientSpeechNative_result = Citizen.invokeNative<void>('0x04C016145CE6A18B', ped, context, params, syncOverNetwork);
	return playPedAmbientSpeechNative_result;
}