/**
 * PED:GET_SYNCHRONIZED_SCENE_PHASE
 *
 * 0xBD3B265153D3BA2D

 * 
 * Returns the current phase of the provided synchronized scene
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @returns {number}  
 */
export function getSynchronizedScenePhase(sceneID: number): number {
	const getSynchronizedScenePhase_result = Citizen.invokeNative<number>('0xBD3B265153D3BA2D', sceneID);
	return getSynchronizedScenePhase_result;
}