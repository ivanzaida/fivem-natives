import { ECutsceneSection, ECutscenePlaybackFlags } from '@ivanzaida/structures'

/**
 * CUTSCENE:REQUEST_CUTSCENE_WITH_PLAYBACK_LIST
 *
 * 0x046FF102DCE74A94

 * 
 * Include the sections you want to play, it will use the first section as the section to start from.
 * 
 * flags: Usually 8
 * 
 * playbackFlags: Which scenes should be played.
 * Example: 0x105 (bit 0, 2 and 8 set) will enable scene 1, 3 and 9.
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cutName
 * @param {ECutsceneSection} cutsceneSection
 * @param {ECutscenePlaybackFlags} playbackFlags
 */
export function requestCutsceneWithPlaybackList(cutName: string, cutsceneSection: ECutsceneSection | number, playbackFlags: ECutscenePlaybackFlags | number = 8): void {
	const requestCutsceneWithPlaybackList_result = Citizen.invokeNative<void>('0x046FF102DCE74A94', cutName, cutsceneSection, playbackFlags);
	return requestCutsceneWithPlaybackList_result;
}