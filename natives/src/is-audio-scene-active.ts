/**
 * AUDIO:IS_AUDIO_SCENE_ACTIVE
 *
 * 0xBC2EE32DE886BD08

 * 
 * Full list of audio scene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/audioSceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneName
 * @returns {boolean}  
 */
export function isAudioSceneActive(sceneName: string): boolean {
	const isAudioSceneActive_result = Citizen.invokeNative<boolean>('0xBC2EE32DE886BD08', sceneName);
	return isAudioSceneActive_result;
}