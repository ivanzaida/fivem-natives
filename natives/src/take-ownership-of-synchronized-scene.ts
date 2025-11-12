/**
 * PED:TAKE_OWNERSHIP_OF_SYNCHRONIZED_SCENE
 *
 * 0x007DF2AFED58568A

 * 
 * Use this command to assign the lifetime of a synced scene to the script this function is called from
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} sceneID
 */
export function takeOwnershipOfSynchronizedScene(sceneID: number): void {
	const takeOwnershipOfSynchronizedScene_result = Citizen.invokeNative<void>('0x007DF2AFED58568A', sceneID);
	return takeOwnershipOfSynchronizedScene_result;
}