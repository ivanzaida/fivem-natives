/**
 * PED:GET_SYNCHRONIZED_SCENE_RATE
 *
 * 0x81A27DBBC2296EB2

 * 
 * Returns the current playback rate of the provided synchronized scene
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @returns {number}  
 */
export function getSynchronizedSceneRate(sceneID: number): number {
	const getSynchronizedSceneRate_result = Citizen.invokeNative<number>('0x81A27DBBC2296EB2', sceneID);
	return getSynchronizedSceneRate_result;
}