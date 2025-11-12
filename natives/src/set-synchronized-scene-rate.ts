/**
 * PED:SET_SYNCHRONIZED_SCENE_RATE
 *
 * 0x16B754A9C2FD8E74

 * 
 * Use this command to change a synchronised scene's playback rate after it has been created. Changing the rate of a synced
 * scene will update the playback speed of any objects attached to it.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @param {number} rate
 */
export function setSynchronizedSceneRate(sceneID: number, rate: number): void {
	const setSynchronizedSceneRate_result = Citizen.invokeNative<void>('0x16B754A9C2FD8E74', sceneID, rate);
	return setSynchronizedSceneRate_result;
}