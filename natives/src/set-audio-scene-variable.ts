/**
 * AUDIO:SET_AUDIO_SCENE_VARIABLE
 *
 * 0x082E0064E4F27AFC

 * 
 * Full list of audio scene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/audioSceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneName
 * @param {string} variableName
 * @param {number} value
 */
export function setAudioSceneVariable(sceneName: string, variableName: string, value: number): void {
	const setAudioSceneVariable_result = Citizen.invokeNative<void>('0x082E0064E4F27AFC', sceneName, variableName, value);
	return setAudioSceneVariable_result;
}