/**
 * AUDIO:SET_VARIABLE_ON_SYNCH_SCENE_AUDIO
 *
 * 0x477B0461E172D182

 * 
 * ------------------------------------------------------------------
 * @param {string} varName
 * @param {number} value
 */
export function setVariableOnSynchSceneAudio(varName: string, value: number): void {
	const setVariableOnSynchSceneAudio_result = Citizen.invokeNative<void>('0x477B0461E172D182', varName, value);
	return setVariableOnSynchSceneAudio_result;
}