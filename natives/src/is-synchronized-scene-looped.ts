/**
 * PED:IS_SYNCHRONIZED_SCENE_LOOPED
 *
 * 0x7E2BC58952835E3B

 * 
 * Returns true is the specified scene is looping
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @returns {boolean}  
 */
export function isSynchronizedSceneLooped(sceneID: number): boolean {
	const isSynchronizedSceneLooped_result = Citizen.invokeNative<boolean>('0x7E2BC58952835E3B', sceneID);
	return isSynchronizedSceneLooped_result;
}