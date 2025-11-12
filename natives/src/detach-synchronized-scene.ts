/**
 * PED:DETACH_SYNCHRONIZED_SCENE
 *
 * 0x83E8210E2B5723F2

 * 
 * Use this command to dettach a synchronized scene.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 */
export function detachSynchronizedScene(sceneID: number): void {
	const detachSynchronizedScene_result = Citizen.invokeNative<void>('0x83E8210E2B5723F2', sceneID);
	return detachSynchronizedScene_result;
}