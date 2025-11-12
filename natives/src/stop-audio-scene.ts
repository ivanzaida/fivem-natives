/**
 * AUDIO:STOP_AUDIO_SCENE
 *
 * 0xB43467C43086A6A1

 * 
 * Full list of audio scene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/audioSceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneName
 */
export function stopAudioScene(sceneName: string): void {
	const stopAudioScene_result = Citizen.invokeNative<void>('0xB43467C43086A6A1', sceneName);
	return stopAudioScene_result;
}