/**
 * PED:SET_SYNCHRONIZED_SCENE_HOLD_LAST_FRAME
 *
 * 0xA7C372501A8A3B23

 * 
 * Use this command to set the hold last frame state of a synchronised scene after it has been created.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 * @param {boolean} holdLastFrame
 */
export function setSynchronizedSceneHoldLastFrame(sceneID: number, holdLastFrame: boolean): void {
	const setSynchronizedSceneHoldLastFrame_result = Citizen.invokeNative<void>('0xA7C372501A8A3B23', sceneID, holdLastFrame);
	return setSynchronizedSceneHoldLastFrame_result;
}