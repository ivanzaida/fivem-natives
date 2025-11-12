import { ECutscenePlaybackFlags } from '@ivanzaida/structures'

/**
 * CUTSCENE:REQUEST_CUTSCENE
 *
 * 0x839AD252B0708F35

 * 
 * Should be used for cutscenes that have no fades e.g. a seamless scene
 * 
 * flags: Usually 8
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cutName
 * @param {ECutscenePlaybackFlags} playbackFlags
 */
export function requestCutscene(cutName: string, playbackFlags: ECutscenePlaybackFlags | number = 8): void {
	const requestCutscene_result = Citizen.invokeNative<void>('0x839AD252B0708F35', cutName, playbackFlags);
	return requestCutscene_result;
}