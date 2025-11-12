/**
 * AUDIO:START_AUDIO_SCENE
 *
 * 0xCAC4020CCF361AC8

 * 
 * Used to prepare a scene where the surrounding sound is muted or a bit changed. This does not play any sound.
 * 
 * List of all usable scene names found in b617d. Sorted alphabetically and identical names removed: https://pastebin.com/MtM9N9CC
 * Full list of audio scene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/audioSceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneName
 * @returns {boolean}  
 */
export function startAudioScene(sceneName: string): boolean {
	const startAudioScene_result = Citizen.invokeNative<boolean>('0xCAC4020CCF361AC8', sceneName);
	return startAudioScene_result;
}