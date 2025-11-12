/**
 * PED:IS_SYNCHRONIZED_SCENE_RUNNING
 *
 * 0x5266F1D2AEF6F73A

 * 
 * Checks to see if the synchronized scene returned by CREATE_SYNCHRONIZED_SCENE is still running.
 * 
 * Returns true if a synchronized scene is running
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @returns {boolean}  
 */
export function isSynchronizedSceneRunning(sceneID: number): boolean {
	const isSynchronizedSceneRunning_result = Citizen.invokeNative<boolean>('0x5266F1D2AEF6F73A', sceneID);
	return isSynchronizedSceneRunning_result;
}