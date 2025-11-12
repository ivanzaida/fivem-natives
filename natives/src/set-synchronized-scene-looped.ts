/**
 * PED:SET_SYNCHRONIZED_SCENE_LOOPED
 *
 * 0xBF3497E24DEAD835

 * 
 * Use this command to set the loopiung state of a synchronised scene after it has been created.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @param {boolean} loop
 */
export function setSynchronizedSceneLooped(sceneID: number, loop: boolean): void {
	const setSynchronizedSceneLooped_result = Citizen.invokeNative<void>('0xBF3497E24DEAD835', sceneID, loop);
	return setSynchronizedSceneLooped_result;
}