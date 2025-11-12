import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_PED_AMBIENT_SPEECH_AND_CLONE_NATIVE
 *
 * 0x6F0064B122E0462C

 * 
 * Plays ambient speech. See also _0x5C57B85D.
 * 
 * See PLAY_PED_AMBIENT_SPEECH_NATIVE for parameter specifications.
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
export function playPedAmbientSpeechAndCloneNative(ped: PedIndex, context: string, params: string, syncOverNetwork: boolean = true): void {
	const playPedAmbientSpeechAndCloneNative_result = Citizen.invokeNative<void>('0x6F0064B122E0462C', ped, context, params, syncOverNetwork);
	return playPedAmbientSpeechAndCloneNative_result;
}