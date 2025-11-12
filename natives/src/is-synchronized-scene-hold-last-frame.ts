/**
 * PED:IS_SYNCHRONIZED_SCENE_HOLD_LAST_FRAME
 *
 * 0x5BD19E1149597B09

 * 
 * Returns true is the specified scene is set to hold last frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @returns {boolean}  
 */
export function isSynchronizedSceneHoldLastFrame(sceneID: number): boolean {
	const isSynchronizedSceneHoldLastFrame_result = Citizen.invokeNative<boolean>('0x5BD19E1149597B09', sceneID);
	return isSynchronizedSceneHoldLastFrame_result;
}