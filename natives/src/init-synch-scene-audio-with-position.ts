/**
 * AUDIO:INIT_SYNCH_SCENE_AUDIO_WITH_POSITION
 *
 * 0xB94570412D3EB8C2

 * 
 * ------------------------------------------------------------------
 * @param {string} audioName
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 */
export function initSynchSceneAudioWithPosition(audioName: string, posX: number, posY: number, posZ: number): void {
	const initSynchSceneAudioWithPosition_result = Citizen.invokeNative<void>('0xB94570412D3EB8C2', audioName, posX, posY, posZ);
	return initSynchSceneAudioWithPosition_result;
}