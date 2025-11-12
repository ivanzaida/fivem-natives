import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_PED_AMBIENT_SPEECH_WITH_VOICE_NATIVE
 *
 * 0x4CAD907F190E6F10

 * 
 * Plays a line of ambient dialogue in a ith this function you can override it
 * Params - name of the speechParam rave game obdifferent ped's voice
 * 
 * This is the same as PLAY_PED_AMBIENT_SPEECH_NATIVE and PLAY_PED_AMBIENT_SPEECH_AND_CLONE_NATIVE but it will allow you to play a speech file from a specific voice file. It works on players and all peds, even animals.
 * 
 * EX (C#):
 * GTA.Native.Function.Call(Hash.PLAY_PED_AMBIENT_SPEECH_WITH_VOICE_NATIVE, Game.Player.Character, "GENERIC_INSULT_HIGH", "s_m_y_sheriff_01_white_full_01", "SPEECH_PARAMS_FORCE_SHOUTED", 0);
 * 
 * The first param is the ped you want to play it on, the second is the speech name, the third is the voice name, the fourth is the speech param, and the last param is usually always 0.
 * 
 * Full list of speeches and voices names by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/speeches.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} context
 * @param {string} voiceName
 * @param {string} params
 * @param {boolean} syncOverNetwork
 */
export function playPedAmbientSpeechWithVoiceNative(ped: PedIndex, context: string, voiceName: string, params: string, syncOverNetwork: boolean = false): void {
	const playPedAmbientSpeechWithVoiceNative_result = Citizen.invokeNative<void>('0x4CAD907F190E6F10', ped, context, voiceName, params, syncOverNetwork);
	return playPedAmbientSpeechWithVoiceNative_result;
}